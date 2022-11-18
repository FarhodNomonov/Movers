import React, { useState } from "react";
import { AccordionTop } from "../../assets/icon";
function Accordion() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const accordion_data = [
    {
      id: 1,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
    {
      id: 2,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
    {
      id: 3,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
    {
      id: 4,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
    {
      id: 5,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
  ];
  const close = (index) => {
    if (openAccordion === index) {
      return setOpenAccordion(null);
    }
    setOpenAccordion(index);
    console.log(openAccordion, index);
  };
  return (
    <div className="max-w-[1536px] mx-auto p-12 smm:p-4">
      <div className="relative wrapper_title md:mb-8   ">
        <h2 className="title_pages text-[#28438E] my-3 mb-4 text-bold text-base font-bold font-Inter">
          ОТВЕЧАЕМ НА ПОПУЛЯРНЫЕ ВОПРОСЫ
        </h2>
      </div>
      {accordion_data?.map((item, index) => (
        <React.Fragment key={index}>
          <div className=" sm:min-w-[85vw] mx-auto ">
            <div
              onClick={() => close(index)}
              className="mt-1  cursor-pointer  py-2 px-[53px] md:px-[13px] bg-[#0061cc1a] md:mt-2 text-white flex justify-between items-center"
            >
              <h3 className="text-[#2B2B2B] font-bold ">{item?.title}</h3>
              <span className="title_scg ">{item?.icon}</span>
            </div>
            {openAccordion === index ? (
              <p className="text-[#2B2B2B] px-5 py-3 ">{item?.description}</p>
            ) : null}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Accordion;
