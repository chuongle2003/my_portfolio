import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";
import ProjectCard from "./project-card";
import { userData } from "@/data/user-data";
import CustomProjectCard from "./custom-project-card";

const Projects = ({ projects, profile }) => {
  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <SectionTitle title="Projects" />

      {/* Custom Projects Section */}
      {userData.projects && userData.projects.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl text-white mb-6">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {userData.projects.map((project, index) => (
              <GlowCard
                key={`custom-project-${index}`}
                identifier={`custom-project-${index}`}
              >
                <CustomProjectCard project={project} />
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* GitHub Projects Section */}
      <div>
        <h3 className="text-xl text-white mb-6">GitHub Repositories</h3>
        <div className="grid py-6 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {projects.map((project) => (
            <GlowCard key={project.id} identifier={`project-${project.id}`}>
              <ProjectCard project={project} />
            </GlowCard>
          ))}
        </div>
      </div>

      <div className="w-full justify-center flex items-center mt-8">
        <Link
          href={profile.html_url}
          target="_blank"
          className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
        >
          <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
            <span>View All Repositories</span>
            <FaLongArrowAltRight size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
