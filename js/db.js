const db = new Dexie("basic_pwa_db");

/*
  Versioning rule:
  - Increment version when schema changes
  - Never delete stores in-place
*/

db.version(1).stores({
  notes: "++id, type, createdAt, updatedAt",
  outbox: "++id, entity, action, createdAt"
});

/*
  Common timestamps enforced centrally
*/
db.on("creating", (primKey, obj) => {
  const now = new Date().toISOString();
  obj.createdAt = now;
  obj.updatedAt = now;
});

db.on("updating", (mods, primKey, obj) => {
  mods.updatedAt = new Date().toISOString();
});

export { db };


