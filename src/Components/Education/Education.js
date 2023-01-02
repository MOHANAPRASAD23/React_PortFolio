import React from 'react';
import './Education.css';
import { Element } from 'react-scroll';
const Education = () => {
  return (
    <Element name="education" className="Education">
      <h1>Education</h1>
      <table className="EducationTable">
        <th>
          S.No
        </th>
        <th>
          Qualification
        </th>
        <th>
          School/College & Year
        </th>
        <th>
          Percentage or CGPA
        </th>
        <tr>
          <td>1</td>
          <td>B.Tech.,(Information Technology)</td>
          <td>K.S.R College of Engineering Tiruchengode</td>
          <td>7.22 CGPA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>HSC</td>
          <td>S.S.M Lakshmi Ammal Mat Hr Sec School Komarapalayam</td>
          <td>70.3% CGPA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>SSLC</td>
          <td>S.S.M Lakshmi Ammal Mat Hr Sec School Komarapalayam</td>
          <td>87.2% CGPA</td>
        </tr>
      </table>
    </Element>
  );
};

export default Education;
