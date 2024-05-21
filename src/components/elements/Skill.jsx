// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Skill = ({ skill }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div className="skill mb-4" ref={inViewRef}>
      <div className="d-flex justify-content-between">
        <p className="mb-2">{skill.title}</p>
        <p className="mb-2">
          <CountUp start={0} end={skill.end} duration={skill.duration} />%
        </p>
      </div>
      <div className="progress">
        <div
          className={`progress-bar ${skill.color}`}
          role="progressbar"
          style={{ width: inView ? `${skill.end}%` : "0%" }}
          aria-valuenow={skill.end}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Skill;
