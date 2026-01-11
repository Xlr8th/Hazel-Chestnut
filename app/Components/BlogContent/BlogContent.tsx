import React from "react";
import { FaCrown, FaCheckDouble, FaStar } from "react-icons/fa";
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4, MdLooks5 } from "react-icons/md";
import './BlogContent.css'

const numberIcons = [
  MdLooksOne,
  MdLooksTwo,
];
let subsectionIndex = 0;


interface BlogContentProps {
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({
  title,
  author,
  date,
  image,
  content,
}) => {
  /* --------------------------------------------
     SPLIT CONTENT INTO BLOCKS BY EMPTY LINES
  --------------------------------------------- */
  const lines = content.split("\n");
  const blocks: string[] = [];
  let tempBlock: string[] = [];

  for (let line of lines) {
    if (line.trim() === "") {
      if (tempBlock.length > 0) {
        blocks.push(tempBlock.join("\n"));
        tempBlock = [];
      }
    } else {
      tempBlock.push(line);
    }
  }
  if (tempBlock.length > 0) blocks.push(tempBlock.join("\n"));

  return (
    <article className="blog-article">

      {/* Hero Section */}
      <section
        className="blog-hero d-flex align-items-end"
        style={{
          minHeight: "60vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container pb-5">
          <FaCrown className="me-2 mb-0 h2 color" />
          <h1 className="text-white fw-bold display-5 mb-3">            
            {title}
          </h1>
          <p className="text-light mb-0 d-flex flex-wrap align-items-center gap-3">
            <span>
              <i className="bi bi-person-fill me-1 color"></i>
              <span className="fw-semibold">{author}</span>
            </span>
            <span>
              <i className="bi bi-calendar-event me-1 color"></i>
              {date}
            </span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container my-5">
        <div className="m-0 p-0 " >
          <div className="blog-content p-0 fs-5 lh-lg">
            {blocks.map((block, index) => {
              const lines = block.split("\n");
              const firstLine = lines[0].trim();
              const restLines = lines.slice(1);

              /* ---------------- SCRIPTURE ---------------- */
              if (
                firstLine.startsWith("“…for thou hast") ||
                firstLine.startsWith("“The twenty-four")||
                firstLine.startsWith("“Behold,")
              ) {
                return (
                  <blockquote
                    key={index}
                    className="p-4 mb-4 custom-border-color"
                  > 
                    <p className="mb-0 fst-italic text-secondary lh-base">
                      <small>{block}</small>                      
                    </p>                    
                    
                  </blockquote>
                );
              }

              /* ---------------- SONG REFLECTION ---------------- */
              if (firstLine.startsWith("Every song that I sing")) {
                return (
                  <div key={index} className="custom-border-color p-4 mb-4">
                    <div className="fst-italic text-secondary lh-sm small">
                      {block.split("\n").map((line, i) => (
                        <div key={i}>
                          <small>{line}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              /* ---------------- SECTION ---------------- */
              if (firstLine.startsWith("##SECTION:")) {
                const title = firstLine.replace("##SECTION:", "").trim();
                return (
                  <section key={index} className="mb-3">
                    <h3 className="fw-semibold m-0 ">
                      <FaCrown className="me-2" />
                      {title}
                    </h3>
                  </section>
                );
              }


              /* ---------------- SUBSECTION ---------------- */
              if (firstLine.startsWith("###SUBSECTION:")) {
                const title = firstLine.replace("###SUBSECTION:", "").trim();

                const NumberIcon =
                  numberIcons[subsectionIndex] || numberIcons[numberIcons.length - 1];

                subsectionIndex++;

                return (
                  <div key={index} className="mt-3">
                    <h4 className="fw-semibold mb-2 d-flex align-items-center">
                      <NumberIcon className="me-2 color NumIcon" />
                      {title}
                    </h4>

                    {restLines.length > 0 && restLines[0].trim() !== "" && (
                      <p className="text-secondary mb-2">
                        <small>{restLines[0]}</small>
                      </p>
                    )}
                  </div>
                );
              }


              /* ------------ BULLET LIST ------------ */
              if (lines.every((line) => line.trim().startsWith("- "))) {
                const items = lines.map((line) =>
                  line.replace("- ", "").trim()
                );

                return (
                  <ul
                    key={index}
                    className="list-unstyled ms-4 text-secondary mb-2 small"
                  >
                    {items.map((item, i) => (
                      <li key={i} className="mb-1 lh-base small">
                      
                          <FaCheckDouble className="me-1 color"  />
                          {item}
                        
                        
                      </li>
                    ))}
                  </ul>
                );
              }

              

              /* ---------------- FOOTER ---------------- */
              if (firstLine.startsWith("##FOOTER")) {
                const footerText = content
                  .split("##FOOTER")[1]
                  .trim()
                  .split("\n\n");
                return (
                  <footer key={index} className="pt-4 border-top mt-4">
                    <p className="text-secondary">
                      <small>{footerText[0]}</small></p>
                  </footer>
                );
              }

              /* ---------------- DEFAULT PARAGRAPH ---------------- */
              return (
                <p key={index} className="text-secondary mb-3 lh-base"> <small>{block}</small>
                  
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogContent;
