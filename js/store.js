import { db } from "./db.js";

export const NotesStore = {

  async add(note) {
    return db.notes.add({
      type: note.type || "generic",
      content: note.content || ""
    });
  },

  async list() {
    return db.notes.orderBy("createdAt").reverse().toArray();
  },

  async get(id) {
    return db.notes.get(id);
  },

  async update(id, changes) {
    return db.notes.update(id, changes);
  },

  async remove(id) {
    return db.notes.delete(id);
  }

};

/*
  Outbox pattern (future sync)
*/
export const OutboxStore = {

  async enqueue(entity, action, payload) {
    return db.outbox.add({
      entity,
      action,
      payload,
      createdAt: new Date().toISOString()
    });
  },

  async pending() {
    return db.outbox.toArray();
  },

  async clear(id) {
    return db.outbox.delete(id);
  }

};

