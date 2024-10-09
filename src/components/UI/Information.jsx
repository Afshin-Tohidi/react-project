import information from "../../components/styles/information.module.scss";
import infoPic from "../../assets/icons/informations/mainPic.png";
import infoIcon1 from "../../assets/icons/informations/icon1.svg";
import infoIcon2 from "../../assets/icons/informations/icon2.svg";
import infoIcon3 from "../../assets/icons/informations/icon3.svg";
import infoTeacher from "../../assets/icons/informations/teacher.svg";
import infoStudent from "../../assets/icons/informations/student.svg";
import infoVideo from "../../assets/icons/informations/video.svg";
import infoUser from "../../assets/icons/informations/user.svg";

export default function Information() {
  return (
    <>
      <section className={information.container}>
        <div className={information.itemsContainer}>
          <div className={information.rightItems}>
            <div className={information.card}>
              <div className={information.imgContainer}>
                <img src={infoIcon1} />
              </div>
              <div className={information.content}>
                <h2>جدیدترین مهارتها را بیاموزید</h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
            <div className={information.card}>
              <div className={information.imgContainer}>
                <img src={infoIcon2} />
              </div>
              <div className={information.content}>
                <h2>برای یک شغل آماده شوید</h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
            <div className={information.card}>
              <div className={information.imgContainer}>
                <img src={infoIcon3} />
              </div>
              <div className={information.content}>
                <h2>گواهینامه کسب کنید</h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
          </div>
          <div className={information.infoPic}>
            <img src={infoPic} />
          </div>
          <div className={information.leftItems}>
            <div className={information.item}>
              <h2>مدرس</h2>
              <h3>۳۰۰</h3>
              <div className={information.imgContainer}>
                <img src={infoTeacher} />
              </div>
            </div>
            <div className={information.item}>
              <h2>دانش آموز</h2>
              <h3>+۲۰٬۰۰۰</h3>
              <div className={information.imgContainer}>
                <img src={infoStudent} />
              </div>
            </div>
            <div className={information.item}>
              <h2>ویدیو</h2>
              <h3>+۵٬۰۰۰</h3>
              <div className={information.imgContainer}>
                <img src={infoVideo} />
              </div>
            </div>
            <div className={information.item}>
              <h2>کاربر</h2>
              <h3>+۱۰۰٬۰۰۰</h3>
              <div className={information.imgContainer}>
                <img src={infoUser} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
