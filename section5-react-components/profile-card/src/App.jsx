import "./styles.css"

const skills = [
  {
    skill: "React",
    color: "purple",
    level: "intermediate"
  },
  {
    skill: "Java",
    color: "orangered",
    level: "advanced"
  },
  {
    skill: "Spring Boot",
    color: "green",
    level: "advanced"
  },
  {
    skill: "Docker",
    color: "blue",
    level: "intermediate"
  },
  {
    skill: "Go",
    color: "lightskyblue",
    level: "beginner"
  }
]

function App() {

  return (
    <div>
      <Card isMain={true} />
    </div>
  )
}

function Card({ isMain }) {
  
  if (isMain) {
    return(
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return <img className="avatar" src="/public/background-js.jpg" alt="" />
}

function Intro() {
  return (
    <div>
      <h1>Francisco Guitler</h1>
      <h3>Full Stack Developer</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta ab doloribus enim esse distinctio pariatur tempora reprehenderit nemo. Perspiciatis nostrum excepturi corrupti exercitationem amet error voluptates asperiores soluta eveniet!
      </p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill key={s.skill} skill={s.skill} color={s.color} level={s.level}/>
      ))}
    </div>
  )
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }} >
      <button title={level} style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
        <span>{skill}</span>
      </button>
    </div>
  )
}

export default App
