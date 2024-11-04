


const TechStack = ({ name, avatar, avatar1, avatar2, avatar3, techStack }) => {
    return (
      <li className="techStacks-item">
        <div className="content-card" data-techStacks-item>
          <figure className="techStacks-avatar-box">
            <img src={avatar} width="40" data-techStacks-avatar />
            <img src={avatar1} width="40" data-techStacks-avatar />
            <img src={avatar2} width="40" data-techStacks-avatar />
            <img src={avatar3} width="40" data-techStacks-avatar />
          </figure>
          <h4 className="h4 techStacks-item-title" data-techStacks-title>{name}</h4>
          <div className="techStacks-text" data-techStacks-text>
            <p>{techStack}</p>
          </div>
        </div>
      </li>
    );
  }
  
  export default TechStack;