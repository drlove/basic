const db = new Dexie("basic_pwa_db");

db.version(1).stores({
  notes: "++id, type, createdAt, updatedAt",
  outbox: "++id, entity, action, createdAt"
});

/* ---------- TABLE HOOKS (CORRECT) ---------- */

db.notes.hook("creating", (primKey, obj) => {
  const now = new Date().toISOString();
  obj.createdAt = now;
  obj.updatedAt = now;
});

db.notes.hook("updating", (mods) => {
  mods.updatedAt = new Date().toISOString();
});

db.outbox.hook("creating", (primKey, obj) => {
  obj.createdAt = new Date().toISOString();
});

export { db };


