export interface JobEntry {
  title: string;
  company: string;
  location: string;
  time: string;
  description: string;
}

export const jobs: JobEntry[] = [
  {
    title: "Developer Experience Engineer",
    company: "RTL Technology GmbH",
    location: "remote",
    time: "2024-07 - now",
    description: "Building tooling to improve the everyday life of developers.",
  },
  {
    title: "Backend Developer",
    company: "RTL Technology GmbH",
    location: "remote",
    time: "2022-03 - 2024-06",
    description:
      "Working in the Customer Engagement team to automate customer communication via email, push and in-app notifications.",
  },
  {
    title: "Shopware Developer",
    company: "Kellerkinder GmbH",
    location: "remote",
    time: "2020-10 - 2022-02",
    description:
      "Implementing custom Shopware solutions for customers, as well as maintaining most payment provider plugins.",
  },
  {
    title: "Fullstack Developer",
    company: "SHOPMACHER eCommerce GmbH & Co. KG",
    location: "Gescher, Germany",
    time: "2019-08 - 2020-09",
    description:
      "Maintaining and developing custom e-commerce solutions for customers with different frameworks, including Shopware, Oxid and Shopify.",
  },
  {
    title: "Core Developer",
    company: "shopware AG",
    location: "Schöppingen, Germany",
    time: "2019-02 - 2019-07",
    description:
      "Helping in the initial development of Shopware 6, as well as maintaining the Shopware 5 platform.",
  },
  {
    title: "Fullstack Developer",
    company: "Guthand GmbH",
    location: "Dortmund, Germany",
    time: "2018-10 - 2018-11",
    description:
      "Building custom webpages using the Symfony framework and CMS systems.",
  },
  {
    title: "Junior Fullstack Developer",
    company: "Mauve Mailorder Software GmbH & Co. KG",
    location: "Essen, Germany",
    time: "2017-03 - 2018-09",
    description:
      "Provinding a custom e-commerce framework specialized on pharmacies, either as a default solution or customer specific implementation.",
  },
];
