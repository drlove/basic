import { NotesStore } from "./store.js";

document.getElementById("ping").addEventListener("click", async () => {
  await NotesStore.add({
    type: "demo",
    content: "Offline note created"
  });

  const notes = await NotesStore.list();
  alert(`Stored offline notes: ${notes.length}`);
});

