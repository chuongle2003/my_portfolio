import Link from "next/link";
import { FaCalendarAlt, FaCode } from "react-icons/fa";

function CustomProjectCard({ project }) {
  return (
    <div className="p-8 h-full flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold capitalize text-primary-title mb-1">
              {project.name}
            </h3>
            <p className="text-teal-500 text-sm">{project.role}</p>
          </div>
          <span className="text-primary-text text-sm flex items-center gap-1 bg-slate-950 px-2 py-1 rounded">
            <FaCalendarAlt className="text-primary-icon" />
            {project.period}
          </span>
        </div>

        <p className="text-primary-text my-4 text-sm">{project.description}</p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies &&
            project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-slate-950 text-primary-text px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CustomProjectCard;
