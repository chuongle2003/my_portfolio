// @flow strict

import { userData } from "@/data/user-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import {
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

function HeroSection({ profile }) {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-primary-bg h-full">
          <div className="flex w-full justify-center">
            <Image
              src={profile.avatar_url}
              width={128}
              height={128}
              alt={profile.name}
              className="rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
          <h1 className="text-2xl font-bold text-center w-full mt-4 text-white">
            {profile.name}
          </h1>
          <h2 className="text-lg text-center w-full mt-1 text-teal-500">
            Frontend-leaning Full-Stack Developer
          </h2>
          <p className="text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center">
            {profile.bio}
          </p>

          <div className="w-full flex flex-col gap-2 mb-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-500" />
              <span>{userData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-teal-500" />
              <a
                href={`mailto:${userData.email}`}
                className="hover:text-teal-500 transition-colors"
              >
                {userData.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-teal-500" />
              <span>{userData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-teal-500" />
              <a
                href={userData.portfolio}
                target="_blank"
                className="hover:text-teal-500 transition-colors"
              >
                {userData.portfolio.replace("https://", "")}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-teal-500" />
              <span>
                {userData.education.university} - {userData.education.degree} (
                {userData.education.graduation})
              </span>
            </div>
          </div>

          <div className="w-full flex justify-center items-center gap-5">
            <Link
              href={userData.github}
              target="_blank"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            {userData.linkedIn && (
              <Link
                href={userData.linkedIn}
                target="_blank"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={24} />
              </Link>
            )}
            {userData.facebook && (
              <Link
                href={userData.facebook}
                target="_blank"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <FaFacebook size={24} />
              </Link>
            )}
            {userData.leetcode && (
              <Link
                href={userData.leetcode}
                target="_blank"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <SiLeetcode size={24} />
              </Link>
            )}
            {userData.twitter && (
              <Link
                href={userData.twitter}
                target="_blank"
                className="transition-all text-teal-500 hover:scale-125 duration-300"
              >
                <FaTwitterSquare size={24} />
              </Link>
            )}
          </div>

          <div className="w-full justify-center flex items-center gap-3 mt-6">
            <Link
              target="_blank"
              href={userData.resume}
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
          </div>
        </div>

        <div className="h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-400">const</span>
                <span className="mr-2 text-violet-400">developer</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">{profile.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">title:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">
                  Frontend-leaning Full-Stack Developer
                </span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">location:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">{userData.location}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">education:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400">
                  {userData.education.university}
                </span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">followers:</span>
                <span className="text-orange-400">{profile.followers}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  repositories:
                </span>
                <span className="text-orange-400">{profile.public_repos}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                {userData.skills.slice(0, 8).map((skill, i) => (
                  <>
                    <span key={i} className="text-cyan-400">
                      {skill}
                    </span>
                    {i !== Math.min(userData.skills.length - 1, 7) && (
                      <span className="text-gray-400">{"', '"}</span>
                    )}
                  </>
                ))}
                <span className="text-gray-400">{"', ...],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">projects:</span>
                <span className="text-orange-400">
                  {userData.projects?.length || 2}
                </span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
