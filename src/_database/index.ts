class DataBase {
  public database: IDBDatabase = null;

  constructor() {}

  init(dbName: string, version?: number): Promise<void> {
    return new Promise((resolve) => {
      const openRequest = window.indexedDB.open(dbName, version);

      openRequest.onupgradeneeded = () => {
        const store = this.database.createObjectStore('users', {
          keyPath: 'id',
          autoIncrement: true,
        });

        store.createIndex('name', 'name');
        store.createIndex('surname', 'surname');
        store.createIndex('email', 'email', { unique: true });

        this.database = openRequest.result;
      };

      openRequest.onsuccess = () => {
        this.database = openRequest.result;
        resolve();
      };
    });
  }

  add() {
    const transaction = this.database.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');

    // store.add({
    //   name: 'Azizbek',
    //   surname: 'Savkimov',
    //   email: 'azizbek@mail.ru',
    //   score: 500,
    //   img: '',
    // });
    // store.add({
    //   name: 'Zafar',
    //   surname: 'Khodjaev',
    //   email: 'thezaff@mail.ru',
    //   score: 400,
    //   img: '',
    // });
    // store.add({
    //   name: 'Anna',
    //   surname: 'Butkova',
    //   email: 'anna@mail.ru',
    //   score: 300,
    //   img: '',
    // });
    // store.add({
    //   name: 'Kazakh',
    //   surname: 'Kazakhov',
    //   email: 'kazax@mail.ru',
    //   score: 200,
    //   img: '',
    // });
  }

  readAll<RecordType>(): Promise<Array<RecordType>> {
    return new Promise((resolve) => {
      const transaction = this.database.transaction('users', 'readonly');
      const store = transaction.objectStore('users');
      const result = store.getAll();

      transaction.oncomplete = () => resolve(result.result);
    });
  }
}

export const database = new DataBase();
