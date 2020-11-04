const dataBase = require("./db");
const saveOrphanage = require("./saveOrphanage");

dataBase.then(async (db) => {
  // await saveOrphanage(db, {
  //   lat: "-27.222633",
  //   lng: "-49.6455874",
  //   name: "Lar dos meninos",
  //   description:
  //     "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "988998888",
  //   images: [
  //     "https://images.unsplash.com/photo-1600720685534-34b48dc60ad2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //     "https://images.unsplash.com/flagged/photo-1576028246561-d6e04a34adbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //   ].toString(),
  //   instructions:
  //     "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visitas das 8h até 18h",
  //   open_on_weekends: "0",
  // });

  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"');
  // console.log(orphanage);

  // const deleteData = await db.run("DELETE FROM orphanages");
  // console.log(deleteData);
});
