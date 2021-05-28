import { IPlayer } from '../models/player-model';

class DataBase {
  public database: IDBDatabase | undefined;

  init(dbName: string, version?: number): Promise<void> {
    return new Promise((resolve) => {
      const openRequest = window.indexedDB.open(dbName, version);

      openRequest.onupgradeneeded = () => {
        this.database = openRequest.result;
        const store = this.database?.createObjectStore('users', {
          keyPath: 'id',
          autoIncrement: true,
        });

        if (store) {
          store.createIndex('score', 'score');
          store.createIndex('email', 'email', { unique: true });
        }
      };

      openRequest.onsuccess = () => {
        this.database = openRequest.result;
        resolve();
      };
    });
  }

  add(player: IPlayer): void {
    const transaction = this.database?.transaction('users', 'readwrite');
    if (transaction) {
      const store = transaction.objectStore('users');
      const res = store.add({});

      res.onsuccess = () => {
        const result = store.index('email');
        const getCurrentEmail = result.get(player.email);

        getCurrentEmail.onsuccess = () => {
          if (getCurrentEmail.result) {
            store.put({ ...getCurrentEmail.result, ...player });
          } else {
            store.put(player);
          }
        };
      };
    }
  }

  getAllUsers<RecordType>(): Promise<Array<RecordType>> {
    return new Promise((resolve) => {
      const transaction = this.database?.transaction('users', 'readonly');
      if (transaction) {
        const store = transaction.objectStore('users');
        const result = store.index('score').openCursor(null, 'prev');
        const res: Array<RecordType> = [];

        result.onsuccess = () => {
          const cursor = result.result;
          if (cursor) {
            res.push(cursor.value);
            cursor.continue();
          }
        };

        transaction.oncomplete = () => {
          resolve(res.slice(0, 10));
        };
      }
    });
  }
}

export const database = new DataBase();
