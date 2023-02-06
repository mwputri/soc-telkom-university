import React from "react";
import "./Lab-Riset.css";
import se from "../../assets/img/Lab/se.webp";
import ise from "../../assets/img/Lab/ise.webp";
import motion from "../../assets/img/Lab/motion.webp";
import telc from "../../assets/img/Lab/telc.webp";
import netos from "../../assets/img/Lab/netos.webp";
import hes from "../../assets/img/Lab/hes.webp";
import Forestry from "../../assets/img/Lab/forensic.webp";
import iot from "../../assets/img/Lab/iot.webp";
import computing from "../../assets/img/Lab/computing.webp";
import ai from "../../assets/img/Lab/ai.webp";
import mm from "../../assets/img/Lab/mm.webp";
import ds from "../../assets/img/Lab/ds.webp";
import hlt from "../../assets/img/Lab/hlt.webp";
import hpc from "../../assets/img/Lab/hpc.webp";
import msl from "../../assets/img/Lab/msl.webp";

const LabRiset = ({ data, handleChange }) => {
  return (
    <div>
      <div className="p-lg-5" style={{ overflowX: "auto" }}>
        <div className="container">
          <div className="content lab-riset">
            <div className="row">
              <div className="se">
                <h2>
                  1. Laboratorium Riset Kelompok Keahlian Software Engineering
                </h2>
                <span>
                <img className="lg:w-40 mt-8" src={se} alt="" />
                Laboratorium Software Engineering, memiliki sub area Software organization and properties, Software notations and tools dan Software creation and management
                <img className="lg:w-40 mt-8" src={ise} alt="" />
                Lab. Information Science and Engineering, memiliki sub area Data management systems, Information storage systems dan World Wide Web.
                <img className="lg:w-40 mt-8" src={motion} alt="" />
                Lab. Mobile and Innovation (Motion), memiliki sub area Human computer interaction (HCI), Interaction design, Collaborative and social computing dan Ubiquitous and mobile computing
                <img className="lg:w-40 mt-8" src={telc} alt="" />
                Lab. Pemodelan Simulasi, memiliki sub area Model development and analysis, Simulation theory, Systems theory, Network science, Simulation types and techniques dan Simulation support systems.
                </span>
              </div>

              <div className="cyber">
                <h2>
                  2. Laboratorium Riset Kelompok Keahlian Cyber Physical Systems
                </h2>
                  <span>
                  <img className="lg:w-40 mt-8" src={hes} alt="" />
                  Laboratorium Hardware & Embedded System, memiliki sub area Communication hardware  interfaces and storage,  Integrated circuits, Very large scale integration design dan Electronic design automation.
                <img className="lg:w-40 mt-8" src={netos} alt="" />
                Laboratorium Network and Operating System, memiliki sub area Architectures, Embedded and cyber-physical systems, dan Real-time systems.
                <img className="lg:w-40 mt-8" src={Forestry} alt="" />
                Laboratorium Forestry, memiliki sub area .Intrusion/anomaly detection and malware mitigation, Systems security dan Network security.
                <img className="lg:w-40 mt-8" src={iot} alt="" />
                Laboratorium IoT & IoT Integration, memiliki sub area Human and societal aspects of security and privacy, Computer Forensics, Internet of Things (IoT) dan Computing / Technology Policy.
                  </span>
              </div>
              <div className="ai">
                <h2>
                3. Laboratorium Riset Kelompok Keahlian Intelligent Systems
                </h2>
                  <span>
                  <img className="lg:w-40 mt-8" src={computing} alt="" />
                  Laboratorium Komputasi, memiliki tiga sub area riset yaitu Pertama Theory of Computation dengan sub are Models of computation, Formal languages and automata theory, Computational complexity and cryptography, Logic, Design and analysis of algorithms, Randomness, geometry and discrete structures, Theory and algorithms for application domains, Semantics and reasoning. Kedua Data Security dengan sub area Cryptography, Formal methods and theory of security, Security services. Ketiga Computing Methodology dengan sub area Symbolic and Algebraic Manipulation, Parallel computing methodologies, Distributed computing methodologies.
                <img className="lg:w-40 mt-8" src={ai} alt="" />
                Lab. Artificial Intelligence, memiliki sub area Knowledge representation and reasoning, Planning and scheduling, Search methodologies, Distributed Artificial Intelligence dan Machine learning.
                <img className="lg:w-40 mt-8" src={mm} alt="" />
                Lab. Multimedia, memiliki sub area Image and video acquisition, Computer vision representations dan Computer vision problems.
                  </span>
              </div>
              <div className="ds">
                <h2>
                4. Laboratorium Riset Kelompok Keahlian Data Science
                </h2>
                  <span>
                  <img className="lg:w-40 mt-8" src={ds} alt="" />
                  Laboratorium Data Science, memiliki sub area Big Data, Data Mining, Process Mining, Web Mining, Graph Mining dan Web Searching & Information Discovery.
                <img className="lg:w-40 mt-8" src={hlt} alt="" />
                Lab. Human Language Technology, memiliki 2 Area Riset yaitu Text Mining & Processing dan Natural Language Processing.
                <img className="lg:w-40 mt-8" src={hpc} alt="" />
                Lab. High Performance Computation, memiliki sub area Document management and text processing, Arts and humanities, Life and medical sciences, Physical sciences and engineering, Finance Computing, Chemistry Computing, Operations research, Cheminformatics.
                <img className="lg:w-40 mt-8" src={msl} alt="" />
                Laboratorium IoT & IoT Integration, memiliki sub area Human and societal aspects of security and privacy, Computer Forensics, Internet of Things (IoT) dan Computing / Technology Policy.
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabRiset;
