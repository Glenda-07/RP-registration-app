// const diplomas = [
//   {
//     name: "Information Technology",
//     id: "information-technology",
//     sessions: [
//       {
//         name: "C218 UI UX DESIGN FOR APPS",
//         id: "ui/ux-design-for-apps",
//         desc:"Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",        
//         speaker: {
//           name: "Azhar Kamar",
//           title: "Lecturer",        
//       },
//       },
//       {
//         name: "C346 Mobile App Development",
//         id: "mobile-app-development",
//         desc: "In this module, students will learn the basics of creating Android Applications.",
//         speaker: {
//           name: "Derek Lee",
//           title: "Lecturer",
//         },
//       },
//     ],
//   },
//   {
//     name: "Financial Technology",
//     id: "financial-technology",
//     sessions: [
//       {
//         name: "C237 Software Application Development",
//         id: "software-application-development",
//         desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
//         speaker: {
//           name: "Hannah Lim",
//           title: "Lecturer",
//         },
//       },
//       {
//         name: "C372 Payment Technologies",
//         id: "payment-technologies",
//         desc: "This module introduces students to different payment technologies and systems.",
//         speaker: {
//           name: "Magdalene Lim",
//           title: "Senior Lecturer",
//         },
//       },
//     ],
//   },
// ];
const diplomas = [
  {
    id: "diploma1",
    name: "Information Technology",
    school: "School of Infocomm",
    sessions: [
      {
        id: "session1",
        name: "C218 UI UX DESIGN FOR APPS",
        desc:"Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",        
        speaker: { name: "Azhar Kamar", title: "Lecturer" }
      },
      {
        id: "session2",
        name: "C346 Mobile-App-Development",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: { name: "Derek Lee", title: "Lecturer" }
      }
    ]
  },
  {
    id: "diploma2",
    name: "Financial Technology",
    school: "School of Infocomm",
    sessions: [
      {
        id: "session3",
        name: "C237 Software Application Development",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        speaker: { name: "Hannah Lim", title: "Lecturer" }
      },
      {
        id: "session4",
        name: "C372 Payment Technologies",
        desc: "This module introduces students to different payment technologies and systems.",
        speaker: { name: "Magdalene Lim", title: "Senior Lecturer" }
      }
    ]
  }
];

export function getDiplomas(schoolId) {
  return diplomas
    .filter(d => d.school === schoolId)
    .map(d => ({ id: d.id, name: d.name }));
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
