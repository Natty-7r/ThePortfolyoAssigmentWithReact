export const categorizeSkills = (skills) => {
  const catagoriesTyes = [
    {
      name: "coding",
      skills: [
        "grapql",
        "javascript",
        "css",
        "sass",
        "typescript",
        "node.js",
        "mongodb",
        "Python",
        "C++",
        "redux",
        "html",
        "css",
        "sass",
        "tailwind",
        "react",
        "next js",
        "javascript",
        ,
        "three.js",
        "typescript",
        "Python",
      ],
    },
    {
      name: "tool",
      skills: ["vercel", "github", "git"],
    },

    {
      name: "design",
      skills: ["figma"],
    },
  ];
  const skillCatgories = [
    { name: "coding", displayName: "Coding Skills", skills: [] },
    { name: "tool", displayName: "Tool Knowlodge", skills: [] },
    { name: "design", displayName: "Design Skills", skills: [] },
  ];

  if (skills)
    skills.forEach((skill) => {
      catagoriesTyes.forEach((catagories) => {
        if (
          catagories.skills.some(
            (catagorySkill) =>
              catagorySkill.toLocaleLowerCase() ==
              skill.name.toLocaleLowerCase()
          )
        ) {
          skillCatgories
            .find((skillCatgory) => skillCatgory.name == catagories.name)
            .skills.push(skill);
        }
      });
    });

  return splitArrayIntoPairs(skillCatgories);
};

const splitArrayIntoPairs = (...arrays) => {
  const result = [];
  arrays.forEach((array) => {
    for (let i = 0; i < array.length; i += 2) {
      result.push(array.slice(i, i + 2));
    }
  });

  return result;
};

export const catagoriesExperience = (experiences) => {
  const result = [[], []];

  experiences.forEach((experience) => {
    if (experience.forEducation) result[0].push(experience);
    else result[1].push(experience);
  });
  return result;
};
