import React, { useState } from 'react';
import Banner from './Banner/Banner';
import LogoSlider from './LogoSlider/LogoSlider';
import url from '../../../data/logoData.json';
import Listing from './Listing/Listing';
import Loading from '../../shared/Loading/Loading';


const Home = () => {
    const [load, setLoad] = useState();
    // window.addEventListener('load', setLoad(true));

    // window.removeEventListener('load', setLoad(false));

    return (
        <div>
            <Banner></Banner>
            <LogoSlider data={url.items}></LogoSlider>
            <Listing></Listing>
            <div className='bg-purple-400 xsm:bg-red-400 sm:bg-yellow-400 md:bg-pink-400 lg:bg-orange-400 xl:bg-green-400 xxl:bg-blue-400'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis laborum obcaecati hic molestiae quibusdam ullam porro ratione assumenda dolores nulla, beatae, tempora eveniet ea dolorem, asperiores dolorum minus! Nemo fuga, in corrupti nam molestias hic aliquam quibusdam voluptates voluptatum fugit consequatur unde esse voluptatem aut dolor exercitationem, maiores ut ullam, non alias? Ullam numquam itaque quis voluptatibus culpa debitis, atque velit iusto quam iure id vitae blanditiis dicta placeat officia perferendis sit sunt sint. Autem illum, velit in alias et ratione, aliquam mollitia quae, quia animi optio ipsum itaque magnam? Distinctio fugit corrupti fuga vel maiores cupiditate ipsam facilis quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae voluptatum aliquid. Aspernatur voluptatem sequi sapiente esse quasi accusamus nostrum magni et? Obcaecati debitis corporis ipsam deserunt odit sequi dolorum repellat optio in consequuntur alias eos, doloremque quae dolor, necessitatibus consequatur, quidem excepturi sit quisquam voluptates maxime non. Neque, maxime. Debitis in distinctio labore et dolorem. Veritatis, quo ea? Quisquam expedita hic tenetur iure, corrupti debitis optio, nihil porro dicta doloremque obcaecati dolore in mollitia id doloribus vel explicabo molestias. Maiores vero consequatur deleniti officiis, ea dolores porro illum alias, dolore laborum vel. Quod, quasi quisquam. Rem aspernatur laborum laboriosam nostrum ipsa dolore, sapiente mollitia consectetur quam iusto. Deleniti, tempore eum. Debitis mollitia, veritatis magnam fuga voluptatum est, quod eum recusandae, culpa a odit laudantium. Molestiae vitae inventore eius libero, expedita commodi dolorum corrupti accusamus, laudantium odio doloribus enim provident ducimus. A, quia? Eum eius distinctio obcaecati maxime. Voluptate sit, temporibus, nostrum placeat quae earum cupiditate dolor fuga praesentium molestiae deleniti velit hic labore obcaecati amet rem. Perspiciatis, aliquid molestiae. Quibusdam debitis dolore dolorum voluptate illo! A sapiente facilis harum consequatur possimus assumenda impedit sint nostrum laboriosam, earum nam, ducimus nulla magnam hic adipisci eaque? Saepe nihil aliquid enim corrupti soluta laboriosam, cum labore adipisci nisi dolorum cumque facilis repellat necessitatibus, nam incidunt ullam aspernatur laudantium sunt optio rerum dolorem. Doloremque expedita, nemo veritatis, culpa molestias accusamus suscipit sapiente qui dolorem illo unde aperiam et, assumenda sequi cumque est? Aut placeat saepe vitae repellat rerum ipsa cumque eos ab maiores, voluptate molestiae repellendus quisquam, labore laborum deserunt libero sequi numquam similique magnam totam fugiat, neque amet cum? Praesentium earum iure voluptas voluptatem quam, nulla pariatur deleniti dolor porro sequi inventore laboriosam aliquid quas deserunt, adipisci dicta. Dolor facilis aut laudantium repudiandae expedita tempore esse maxime. Quas, voluptates rem reprehenderit vel magni similique voluptatem aliquam! Quasi consequuntur dolorum libero? Dolores ipsam voluptate est dignissimos beatae harum consectetur consequuntur aperiam mollitia, officiis commodi distinctio fugiat tempore in? Numquam dolores reiciendis enim sunt aliquid. Aut mollitia doloribus et repellendus aliquam labore ipsa, dignissimos debitis, temporibus deserunt corporis at est dolores, officia asperiores corrupti vel pariatur voluptatem ratione voluptatibus totam a hic dolor. Id est esse sit dignissimos vitae totam unde odio, eius odit excepturi vel enim voluptates nisi architecto neque, amet, nulla quam temporibus animi maiores cum? Maiores nihil eveniet repellendus enim illum. Perferendis fugiat nemo dignissimos cum tempora totam officiis natus a ab. Temporibus debitis vitae libero magni maiores sit delectus corporis animi unde culpa, vero error eaque nisi quibusdam dolorem saepe cupiditate! Pariatur debitis magnam, nostrum non impedit ducimus illum corrupti totam culpa id esse incidunt omnis corporis, ea molestias odio voluptate! Nobis aliquam doloremque libero, maiores, perspiciatis porro animi repudiandae magnam sed alias ut quo labore, quas iste optio est. Debitis provident rem commodi, obcaecati voluptates, corrupti unde cumque alias quos magni ducimus officia quas impedit inventore cupiditate suscipit quod corporis voluptatibus illo expedita aliquam. Dicta suscipit facere dolores illum iure rem ad tempore laborum assumenda nam, doloribus ipsum facilis enim fuga unde dolor, libero explicabo adipisci! Repellat totam consectetur quae? Ut consectetur ab, velit possimus, dicta repudiandae laboriosam aspernatur impedit maiores sed mollitia praesentium fugiat ea esse? Officiis eligendi maxime tempora delectus, ratione dolor quidem perspiciatis, perferendis quis suscipit unde dolorem accusantium soluta corporis voluptatum voluptates earum atque aspernatur a laborum reiciendis? Obcaecati quam tempore quisquam ratione molestiae necessitatibus excepturi rerum quos. Esse mollitia, ex reprehenderit deleniti numquam a est quis itaque, necessitatibus recusandae laboriosam facilis tempore vel, harum quod molestiae! Qui eum sunt reiciendis repudiandae dolorem repellendus blanditiis, aut cumque fugiat odit suscipit id sed accusamus, odio mollitia nemo aliquam cupiditate consectetur in, magni rem! Nihil beatae sapiente maxime eligendi blanditiis ab at. Odio, temporibus. A, repellendus doloremque neque vitae autem quas esse dignissimos, consectetur reprehenderit mollitia eligendi excepturi voluptatibus inventore magnam illum explicabo cumque nulla molestiae saepe possimus fugit. Totam dolor temporibus minima maxime ex. Impedit exercitationem temporibus saepe, mollitia sequi amet laboriosam perspiciatis libero nostrum nam neque dolore accusantium velit quae voluptas, dolorem facilis labore aspernatur distinctio numquam repellat! Molestias aliquam saepe, corporis sequi culpa facere, vel praesentium provident molestiae commodi tenetur animi doloremque nemo soluta ducimus sit? Amet iste in facilis omnis laudantium rerum aut minus ipsum debitis tempore alias accusantium, ipsam voluptatem qui aspernatur deleniti eos fuga blanditiis incidunt labore? Impedit accusamus quae quam quisquam dolor excepturi at, itaque a, cupiditate sunt nulla laborum illum, vitae eius nihil. Deserunt fugit aperiam praesentium animi quibusdam iste. Illum, adipisci incidunt. Sint in amet, laudantium quam eligendi repudiandae dolores reiciendis blanditiis temporibus iure quidem excepturi ex consectetur harum quasi molestiae, maiores aspernatur illo, distinctio adipisci optio soluta tempora? Voluptas magnam ullam, eveniet architecto accusantium recusandae repellat, laborum velit reprehenderit ut placeat totam. Nesciunt tenetur temporibus quia alias, qui modi quos optio vero praesentium? Repudiandae eaque omnis ipsum deleniti atque tempora nam, error adipisci! Architecto, minima animi eum reprehenderit iste voluptatum sunt libero nobis eaque ex enim beatae, quis cum ut quae. Ab amet provident deserunt ipsum error laboriosam ad est laudantium minus illo temporibus natus quidem dignissimos odit aliquam maxime illum cum repellendus recusandae fugiat, voluptas quasi culpa quos. At corporis impedit nam ipsa velit eveniet quae nihil porro laborum repudiandae culpa, saepe delectus aperiam illum, dolorum eaque laudantium ratione nisi iusto praesentium quas! Esse ea saepe quae consequatur ratione nobis autem exercitationem explicabo id temporibus reprehenderit sed repellendus molestiae suscipit repudiandae, placeat veniam perferendis quam. Esse ut eius saepe. Dignissimos excepturi, consequatur velit repudiandae unde, eum dicta fuga perferendis tempora soluta placeat nostrum numquam deleniti, mollitia quidem quis totam! Hic quisquam officiis corporis, aut in, quidem tempore unde harum obcaecati quasi iusto voluptate eveniet assumenda. Iusto minus corporis reprehenderit dolor magnam dolorum perspiciatis officia repudiandae consequuntur eligendi quaerat iste numquam culpa expedita, iure optio totam illum cupiditate? Nihil, pariatur quasi qui culpa necessitatibus eum earum blanditiis atque quaerat molestias excepturi iusto labore iste quos, repudiandae corrupti assumenda exercitationem provident voluptatibus voluptates. Voluptate ex, tempora sit animi nemo esse aliquam nostrum nam laborum totam deleniti pariatur sequi?
            </div>
        </div>
    );
};

export default Home;