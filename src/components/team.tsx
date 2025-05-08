import React from "react";

const TeamComponent = () => {
  const departments = [
    {
      name: "Design and Social media",
      members: [
        { name: "Imruthun", id: "DSM001", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
        { name: "Vigneshwar", id: "DSM002", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
      ],
    },
    {
      name: "Finance", 
      members: [
        { name: "Sachin Arvind", id: "FIN001", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
        { name: "Arumugam PK", id: "FIN002", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
      ],
    },
    {
      name: "Website",
      members: [
        { name: "Daniel James", id: "WEB001", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
        { name: "Allen John", id: "WEB002", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
        { name: "Pranav", id: "WEB003", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
        { name: "Zaeen", id: "WEB004", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
      ],
    },
    {
      name: "Operetions and Advisory",
      members: [
        { name: "Abhijeet", id: "OA001", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
        { name: "Mohd Arif", id: "OA002", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
      ],
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-14 text-blue-gray-900">
      <div>
        <h1 className="mb-6 border-b md:text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Our Team
        </h1>
        {departments.map((dept) => (
      <div key={dept.name} style={{ marginBottom: "2.5rem", marginTop: "2.5rem" }}>
        <h2 className="text-center" style={{ fontSize: "1.5em", marginBottom: "1rem" }}>{dept.name}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {dept.members.map((person) => (
            <div className="pb-2" key={person.name} style={{
              width: 160,
              textAlign: "center",
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
            }}>
              <img
                src={person.image}
                alt={person.name}
                className="p-2 rounded-medium"
              />
              <div style={{ fontSize: "1em" }}>{person.name}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
      </div>
    </div>
  );
};

export default TeamComponent;


// import React from "react";

// // Define types
// type Person = {
//   name: string;
//   image: string; // URL or local path
// };

// type Department = {
//   name: string;
//   people: Person[];
// };

// // Sample data (replace with your actual data)
// const departments: Department[] = [
//   {
//     name: "Engineering",
//     people: [
//       { name: "Alice", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
//       { name: "Bob", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
//       { name: "Bob", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
//     ],
//   },
//   {
//     name: "Marketing",
//     people: [
//       { name: "Carol", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
//       { name: "Dave", image: "https://avatars.worldcubeassociation.org/uploads/user/avatar/2012JAME04/1704019172.jpg" },
//     ],
//   },
// ];

// const TeamComponent: React.FC = () => (
//   <div style={{ fontFamily: "Arial, sans-serif", background: "#f9f9f9", minHeight: "100vh", padding: "2rem" }}>
    
//   </div>
// );

// export default TeamComponent;

