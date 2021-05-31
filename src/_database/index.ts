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
          store.createIndex('name', 'surname');
          store.createIndex('surname', 'surname');
          store.createIndex('email', 'email', { unique: true });
        }
      };

      openRequest.onsuccess = () => {
        this.database = openRequest.result;
        resolve();
      };
    });
  }

  updateScore(player: IPlayer): Promise<IPlayer> {
    return new Promise((resolve) => {
      const transaction = this.database?.transaction('users', 'readwrite');
      if (transaction) {
        const store = transaction.objectStore('users');
        const index = store.index('email');
        const getCurrentEmail = index.get(player.email);

        getCurrentEmail.onsuccess = () => {
          store.put({ ...getCurrentEmail.result, ...player });
          resolve(getCurrentEmail.result);
        };
      }
    });
  }

  logIn(player: IPlayer): Promise<IPlayer | null> {
    return new Promise((resolve) => {
      const transaction = this.database?.transaction('users', 'readwrite');
      if (transaction) {
        const store = transaction.objectStore('users');
        const index = store.index('email');
        const getCurrentEmail = index.get(player.email);

        getCurrentEmail.onsuccess = () => {
          if (getCurrentEmail.result) {
            if (getCurrentEmail.result.password === player.password) {
              resolve(getCurrentEmail.result);
            } else {
              resolve(null);
            }
          } else {
            resolve(null);
          }
        };
      }
    });
  }

  add(player: IPlayer): Promise<boolean> {
    return new Promise((resolve) => {
      const transaction = this.database?.transaction('users', 'readwrite');
      if (transaction) {
        const store = transaction.objectStore('users');
        const res = store.add(player);

        res.onsuccess = () => {
          resolve(true);
        };

        res.onerror = () => {
          resolve(false);
        };
      }
    });
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
