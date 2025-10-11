import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Project1 from '@/assets/1.jpeg';
import Project2 from '@/assets/2.jpeg';
import Project3 from '@/assets/3.jpeg';
import Project4 from '@/assets/4.jpeg';

interface Project {
  id: number;
  title: string;
  image: string;
  description?: string;
  price?: string;
  location?: string;
  size?: string;
  status?: string;
}

const projects: Project[] = [
  
];

const Projects = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-0 mt-0  bg-gray-50" id="projects">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group shadow-xl rounded-xl hover:scale-105 hover:shadow-3xl transition-transform duration-300 flex flex-col bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-92 object-cover rounded-t-xl transition-all duration-300 border-2 border-transparent"
              />
              <CardContent className="flex flex-col flex-grow justify-between p-5">
                <div>
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl font-bold text-black">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-700 text-sm mb-3">
                    {project.description}
                  </p>
                  {/* Property Details */}
                  <div className="text-xs text-gray-800 space-y-1">
                    <p><span className="font-semibold text-black">Price:</span> {project.price}</p>
                    <p><span className="font-semibold text-black">Location:</span> {project.location}</p>
                    <p><span className="font-semibold text-black">Size:</span> {project.size}</p>
                    <p><span className="font-semibold text-black">Status:</span> {project.status}</p>
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="mt-5 w-full bg-black text-white font-semibold tracking-wide py-4 text-lg rounded-md shadow-md hover:bg-[#FCBD01] hover:text-black transition-all duration-300"
                >
Register Now for the Upcoming Batch
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
