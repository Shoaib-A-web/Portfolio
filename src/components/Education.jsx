import React from 'react';
import certificate1 from '../assets/pdf/BCA_marksheet.pdf';
import certificate2 from '../assets/pdf/ITI.pdf';
import certificate3 from '../assets/pdf/12_marksheet.pdf';
import extera from '../assets/pdf/extera.pdf';
import certificate4 from '../assets/pdf/matriculation_marksheet.pdf';
import { list } from 'postcss';

const education = [
  {
    title: 'Bachelor Computer Application (BCA)',
    institution: 'Shri Sarvajanik B.C.A & P.G.D.C.A College',
    organization: 'Hemchandracharya North Gujarat University (HNGU)',
    add: 'Mahesana, Gujarat, India',
    period: '2023 - 2025',
    prc: '75',
    pdfUrl: certificate1,
  },
  {
    title: 'ITI (fitter)',
    institution: 'Government Industrial Training Institute',
    organization: 'National Council for Vocational Training (NCVT)',
    add: 'Hazaribagh, Jharkhand, India',
    period: '2018 - 2020',
    prc: '80',
    pdfUrl: certificate2,
  },
    {
    title: 'Intermediate of Art\'s (12\u1D57\u02B0)',
    institution: 'Bhujudih Inter College',
    organization: 'Jharkhand Academic Council (JAC)',
    add: 'Bokaro, Jharkhand, India',
    period: '2016 - 2018',
    prc: '38',
    pdfUrl: certificate3,
    },
    {
        title: 'Matriculation (10\u1D57\u02B0)',
        institution: 'ST. Thomas High School',
        organization: 'Central Board of Secondary Education (CBSE)',
        add: 'Dhanbad, Jharkhand, India',
        period: '2014 - 2016',
        prc: '78',
        pdfUrl: certificate4,
    },
    {
        title: 'Extra Qualification ',
        list: ['Excel', 'PowerPoint', 'Word', 'Photoshop', 'CorelDRAW', 'Tally ERP 9', 'AutoCAD', 'SolidWorks', '3D Modeling', 'Video Editing'],
        pdfUrl: extera,
    }
];

export default function Education() {
  const [selectedPdf, setSelectedPdf] = React.useState(null);

  return (
    <section id="education" className="py-24 px-6 bg-[#13121a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#7c5cfc] text-xs tracking-[3px] uppercase text-center mb-2">
          My Journey
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center mb-14">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          

            {education.map(({ title, institution, organization, add, period, prc, pdfUrl }) => (
              <div className="bg-[#0a0a0f] border border-white/[0.07] rounded-2xl p-8" key={title}>
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-[#ccccdb] font-bold leading-relaxed mb-5">
                  <span className="underline">{institution}</span><br />
                  <span className="text-[#7a7890]  no-underline font-normal">
                    {add}
                  </span>
                </p>
                <p className="text-sm text-[#7a7890] leading-relaxed mb-5">
                  {organization}
                </p>
                <p className="text-sm text-[#7a7890] leading-relaxed mb-5">
                  {period}
                </p>
                {prc && (
                  <p className="text-sm text-[#7a7890] leading-relaxed mb-5">
                    Percentage: {prc}%
                  </p>
                )}
                <ul className="list-disc list-inside">
                    {education.find(e => e.title === title)?.list?.map((item, index) => (
                        <li key={index} className="text-sm text-[#7a7890] leading-relaxed mb-2">
                            {item}
                        </li>
                    ))}
                </ul>
                <button className="bg-[#7c5cfc] text-white py-2 px-4 rounded-lg hover:bg-[#6a4ce0] transition-colors duration-300" onClick={() => setSelectedPdf(pdfUrl)}>
                    View Certificate
                </button>
              </div>
            ))}
            
        </div>
        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 max-w-4xl w-full max-h-full overflow-auto">
              <iframe src={selectedPdf} width="100%" height="600px" />
              <button className="mt-4 bg-[#7c5cfc] text-white py-2 px-4 rounded-lg hover:bg-[#6a4ce0] transition-colors duration-300" onClick={() => setSelectedPdf(null)}>
                Close
              </button>
            </div>
          </div>
        )}
        
      </div>
    </section>
  )
}