import Image from "next/image";
import React from "react";

import Header from "@/components/Header";
import TabsComponent from "@/components/Tabs";

import { president, secretary, principal } from "@/assets/img/management";
import { secondary_bold } from "@/app/fonts";

const Management = () => {
  return (
    <div className="pt-20">
      <Header title="Our management" className="my-10 py-2 text-2xl" />
      <div>
        <TabsComponent items={items} />
      </div>
    </div>
  );
};

export default Management;

const items = [
  {
    title: "president's message",
    content: (
      <div className="border-2 border-primary rounded-md p-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={president}
            alt="president"
            className="rounded-full object-cover object-top w-[200px] h-[200px] mb-4"
          />
          <p className={`${secondary_bold.className} capitalize`}>
            balbir kaur
          </p>
        </div>
        <p className="px-4 text-justify mt-4">
          An educated capable and morally upright human resource is the most
          valuable asset any nation can have. India with the largest number of
          young people and an extensive education system is definitely a wealthy
          nation in this regard. We, at Lyallpur Khalsa College the play our
          role in this regard by shaping up young minds into a potent workforce
          that contributes in a positive manner to progress of the country and
          betterment of the society. In its life journey, the college has
          provided education to the young men and women of the country without
          any kind of discrimination. Offering a blend of tradition and
          modernity, science and spirituality, knowledge and action and learning
          and recreation, the college has remained loyal to the vision of its
          founders and has tried successfully to live up to the expectations the
          society has always had from it. As the president of the Governing
          Council of the College, I assure you that the college will continue to
          fulfill the duty assigned to it.
        </p>
      </div>
    ),
  },
  {
    title: "secretary's message",
    content: (
      <div className="border-2 border-primary rounded-md p-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={secretary}
            alt="sec"
            className="rounded-full object-cover object-top w-[200px] h-[200px] mb-4"
          />
          <p className={`${secondary_bold.className} capitalize`}>
            Urmiljeet Kaur Hony
          </p>
        </div>
        <p className="px-4 text-justify mt-4">
          Welcome to Lyallpur Khalsa College, the 109-year-old historic and
          premier coeducational institution of northern India. The institution,
          established in 1928 in Lyallpur (now Faisalabad, in Pakistan) as a
          school and upgraded to a degree college in 1928, has emerged as one of
          the leading colleges of the region, after its reestablishment in
          Jalandhar in 1948 following the unfortunate partition of the country.
          The college offers a variety of traditional as well as modern courses
          ranging from languages to Computers, Biotechnology, Physiotherapy and
          Printing Technology, to name a few. In its existence of over 100
          years, the institution has truthfully followed its policy of selfless
          service to humanity by providing quality education to the youth of the
          country without any distinction of race, religion, caste, gender, and
          region, and I am confident that the college will continue to march
          ahead along these lines.
        </p>
      </div>
    ),
  },
  {
    title: "principal's message",
    content: (
      <div className="border-2 border-primary rounded-md p-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={principal}
            alt="president"
            className="rounded-full object-cover object-top w-[200px] h-[200px] mb-4"
          />
          <p className={`${secondary_bold.className} capitalize`}>
            dr. jaspal singh
          </p>
        </div>
        <p className="px-4 text-justify mt-4">
          I feel privileged to welcome you to Lyallpur Khalsa College, Jalandhar
          the century old premier multidisciplinary educational institution of
          Northern India. The institution in its eventful history has been a
          witness to the British colonial era and the subsequent Indian freedom
          struggle resulting in its independence and the bloody partition which
          forced it to get uprooted from its birth place and settle in a new
          land. During all this upheaval, the institution has unswervingly
          continued to work with its original mission – to provide socially,
          culturally and spiritually rooted useful education to the youth of the
          region, without any discrimination on the basis of race, religion,
          region, caste or gender. Of its total student strength which comes
          from diverse sections of society, about 40% are women students. The
          institution with its academically rich faculty, regularly updated and
          appropriate infrastructure, beautiful green campus, well maintained
          playgrounds and effective work culture provides an ideal ambience for
          the multifaceted growth of its students, which is reflected in the
          long and impressive list of its alumni. Moving along the principle of
          Think Globally and Act Locally, the institution offers a wide range of
          courses ranging from traditional to modern in content, and academic
          and professional in orientation, and is all set to move ahead with the
          National Education Policy 2020. I assure you that your academic
          experience at Lyallpur Khalsa College will be a rewarding one.
        </p>
      </div>
    ),
  },
];
