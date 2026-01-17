const diplomas = [
  {
    name: "Information Technology",
    id: "information-technology",
    sessions: [
      {
        name: "C218 UI UX DESIGN FOR APPS",
        id: "ui/ux-design-for-apps",
        desc:"Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",        
        speaker: {
          name: "Azhar Kamar",
          title: "Lecturer",        
      },
      },
      {
        name: "C346 Mobile App Development",
        id: "mobile-app-development",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "financial-technology",
    sessions: [
      {
        name: "C237 Software Application Development",
        id: "software-application-development",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        speaker: {
          name: "Hannah Lim",
          title: "Lecturer",
        },
      },
      {
        name: "C372 Payment Technologies",
        id: "payment-technologies",
        desc: "This module introduces students to different payment technologies and systems.",
        speaker: {
          name: "Magdalene Lim",
          title: "Senior Lecturer",
        },
      },
    ],
  },
  {
    name: "Arts, Crafts, Fashion, and Fare",
    id: "arts-crafts-fashion-fare",
    sessions: [
      {
        name: "Ideas into Business",
        id: "ideas-into-business",
        desc: "From 3D printed jewelry to hand embroidery, epoxy river tables to boat making, many makers find that there is a market for what they create, and embark on a business. Meet successful makers who have turned their maker energy into successful enterprises.",
        speaker: {
          name: "Dixie Russel",
          title: "Art Director",
          org: "Red30 Design",
          bio: "Dixie Russel has run a successful side business selling her paintings for the last seven years, and founded the local arts-makerspace in her neighborhood. We have no idea how she finds time to work for us, we're just glad she does.",
        },
      },
      {
        name: "Making Things from Other Things",
        id: "making-things-from-other-things",
        desc: "When you think 'maker', you don't usually think about olive oil. But olive oil's use has gone far beyond its role on the dinner table. This session shows and tells about artisanal creations that include olive oil and other usually-used-for-something-else ingredients, from soap to wood polish.",
        speaker: {
          name: "Anna Rossi",
          title: "Product Development Specialist",
          org: "Two Trees Olive Oil",
          bio: "Anna Rossi's favorite part of her job is getting to invent things with people and companies from all over the world. She also heads up the annual customer maker contest, featuring people who make amazing things with Two Trees Olive Oil.",
        },
      },
    ],
  },
];

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}


export function getDiploma(diplomaId) {
  return diplomas.find(d => d.id === diplomaId);
}


export function getModules(diplomaId) {
  const diploma = diplomas.find(d => d.id === diplomaId);
  return diploma?.sessions || [];
}


export function getSession({ diplomaId, sessionId }) {
  return diplomas
    .find(d => d.id === diplomaId)
    ?.sessions.find(s => s.id === sessionId);
}


export function getSchools() {
  const schoolsMap = {};
  diplomas.forEach(d => {
    if (d.school) {
      schoolsMap[d.school] = { id: d.school, name: d.school };
    }
  });
  return Object.values(schoolsMap);
}
