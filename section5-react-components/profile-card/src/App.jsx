import "./styles.css"

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
      <Skill skill="React" color="blue" />
      <Skill skill="Java" color="orangered" />
      <Skill skill="Spring Boot" color="green" />
      <Skill skill="Docker" color="purple" />
    </div>
  )
}

function Skill({ skill, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }} >
      <span>{skill}</span>
    </div>
  )
}

export default App
