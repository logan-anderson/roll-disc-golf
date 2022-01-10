import { DiscRoller } from "../components/DiscRoller";
import { Layout } from "../components/Layout";
import { useOptions } from "../components/state/DiscOptionsTypeProvider";

export default function Home() {
  const { options } = useOptions();
  return (
    <Layout>
      <DiscRoller options={options} />
      <p>
        Exercitation dolore deserunt est eiusmod laborum fugiat ut consectetur
        duis nisi mollit. Anim deserunt sit id est qui fugiat aute sunt. Labore
        reprehenderit eiusmod adipisicing fugiat officia eu ut do non magna.
        Reprehenderit nisi tempor dolore excepteur minim tempor esse occaecat
        aute anim est. Consectetur incididunt consequat duis laboris. Qui do id
        ullamco mollit laborum nisi labore anim minim. Pariatur deserunt
        pariatur nostrud tempor exercitation pariatur. Eiusmod consectetur
        ullamco quis duis et elit culpa. Est in reprehenderit exercitation
        officia adipisicing occaecat duis dolore incididunt anim ullamco minim
        irure ipsum. Excepteur excepteur sit aliqua cillum adipisicing cillum
        quis voluptate qui sint nostrud tempor magna amet. Nulla ullamco duis
        consequat esse sunt enim enim. Culpa nulla labore pariatur Lorem officia
        aute fugiat exercitation ipsum ipsum culpa qui ea. Tempor eu quis aute
        proident nisi in officia cillum aliquip cupidatat pariatur dolore anim
        nulla. Nisi irure id anim sit pariatur magna nisi. Consectetur officia
        sunt laborum laboris dolor in irure sit occaecat amet. Eu sunt ullamco
        mollit magna excepteur nulla laboris velit. Dolor aliquip velit irure
        elit sint exercitation tempor veniam aliqua culpa velit velit
        consectetur. Exercitation nulla laboris consequat dolor cupidatat culpa
        veniam deserunt. Do excepteur do incididunt amet aliqua amet et tempor
        cillum dolor pariatur ad aute nulla. Nulla mollit adipisicing deserunt
        anim amet incididunt sit. Cillum non ipsum amet aliquip ipsum nulla
        adipisicing nostrud quis. Consequat adipisicing nulla excepteur anim in
        incididunt commodo voluptate. Eu enim anim elit exercitation nulla elit
        nostrud voluptate in occaecat commodo proident est. Et deserunt non
        pariatur nostrud qui Lorem. Velit anim ut non consectetur. Occaecat
        laboris velit reprehenderit non id non anim. Fugiat qui enim nostrud
        commodo ut commodo consectetur id ea minim. Veniam labore qui aute
        consequat excepteur labore quis eu sunt dolore minim. Commodo anim
        commodo veniam sint incididunt adipisicing. Pariatur aute adipisicing
        adipisicing sint non qui ad ipsum ea elit aliqua ex amet do. Elit
        occaecat consectetur cupidatat proident elit quis eiusmod aliqua aliqua
        sunt pariatur. Pariatur nostrud sunt Lorem esse. Anim nisi officia aute
        qui officia nisi eiusmod sit. Dolore irure ea quis esse. Nisi sit aute
        excepteur commodo consequat voluptate id dolor tempor et eu eu. Tempor
        proident consectetur aliquip dolore ut. Laborum do dolore ut culpa ut
        nisi voluptate ea cillum ex ad non. Irure cupidatat ea sunt est
        consectetur dolore. Cupidatat dolor mollit minim velit fugiat. Aute duis
        cupidatat anim do commodo occaecat. In magna enim laboris deserunt aute
        duis ipsum esse. Cupidatat ea qui deserunt veniam quis. Deserunt commodo
        et laborum aute laborum anim deserunt. Magna veniam cillum sint dolore
        consectetur voluptate pariatur ad do. Commodo aute est officia laboris
        est. Qui adipisicing commodo Lorem ea amet qui velit consequat officia
        Lorem consectetur veniam pariatur cillum. Deserunt aliqua adipisicing
        eiusmod consectetur nisi dolore id id exercitation incididunt excepteur
        amet. Amet quis proident pariatur enim culpa nisi Lorem amet excepteur
        fugiat labore. Velit ullamco esse ut reprehenderit elit ullamco esse eu
        irure nisi. Excepteur nisi occaecat veniam nulla minim laboris nisi
        culpa aliqua. Ipsum duis fugiat deserunt ad labore et amet. Velit ad
        quis irure duis veniam cupidatat fugiat et dolore.
      </p>
    </Layout>
  );
}
