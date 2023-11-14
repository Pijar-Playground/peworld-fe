// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const listData = [
  {
    id: 1,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Louis Tomlinson",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],
    socmed: {
      email: "Louistommo@gmail.com",
      instagram: "@Louist91",
      github: "@Louistommo",
      gitlab: "@Louistommo91",
    },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 2,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Anas Rahat",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 3,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Haris Burhan",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 4,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Abdelhak Rais",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 5,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Mahmud Esmat",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 6,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Butrus Rida",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
  {
    id: 7,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Taher Ramadan",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },

  {
    id: 8,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Zinedine Gawdat",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },

  {
    id: 9,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Rasool Shafiq",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },

  {
    id: 10,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Salil Baqir",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },

  {
    id: 11,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Masood Thamir",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },

  {
    id: 12,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Nagib Saleh",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },

  {
    id: 13,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Mahdi Nasib",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },

  {
    id: 14,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Bahij Ikraam",
    job: "Web developer",
    location: "Jakarta",
    skills: ["PHP", "JavaScript", "JavaScript"],

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
  },
];

export default function handler(req, res) {
  if (req.query.id) {
    res.status(200).json({
      status: true,
      message: "Get data success",
      data: listData?.find((item) => item?.id === parseInt(req.query.id)),
    });
  } else {
    res
      .status(200)
      .json({ status: true, message: "Get data success", data: listData });
  }
}
