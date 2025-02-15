function skillsMember() {
    var skills = ["HTML", "CSS", "JavaScript", "Python", "R", "C++", "C#", "Java", "Swift", "PHP"];
    var members = [{
            name: "A",
            skill: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "B",
            skill: ["Python", "R"]
        },
        {
            name: "C",
            skill: ["C++", "C#"]
        },
        {
            name: "D",
            skill: ["Java", "Swift"]
        },
        {
            name: "E",
            skill: ["PHP", "HTML"]
        }
    ];
    let result = skills.map(skill => {
        return {
            skill,
            members: members.filter(member => member.skill.includes(skill)).map(member => member.name)
        }
    });
    return result;
}