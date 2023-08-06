import { CSSProperties, FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import { IoHelp } from "react-icons/io5";
import { Howl, Howler } from "howler";

interface Props {
  type?: "bigCircle" | "circle" | "help";
  children?: ReactNode;
  onClick?: () => void;
  mt?: string;
}

// interface ISound {
//   sound: string;
//   label: string;
// }

// const soundList: ISound[] = [{ sound: "/sound/cent.mp3", label: "Cent" }];

export const Button: FC<Props> = ({
  type = "bigCircle",
  children = "",
  mt = "0",
  onClick = () => "",
}): JSX.Element => {
  const styleComp: CSSProperties = {
    marginTop: mt,
  };

  const SoundPlay = (src: string) => {
    const sound = new Howl({
      src,
    });
    Howler.volume(1.0);
    sound.play();
  };

  function pop(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: string,
    img?: string
  ) {
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = e.currentTarget.getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 30; i++) {
        createParticle(x, y, type, img);
      }
    } else {
      for (let i = 0; i < 30; i++) {
        createParticle(e.clientX, e.clientY, type, img);
      }
    }
  }
  function createParticle(x: number, y: number, type: string, img?: string) {
    const particle = document.createElement("particle");
    document.body.appendChild(particle);
    let width: string | number = Math.floor(Math.random() * 30 + 8);
    let height: string | number = width;
    const destinationX = (Math.random() - 0.5) * 300;
    const destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    switch (type) {
      case "square":
        particle.style.background = `hsl(${
          Math.random() * 50 + 200
        }, 70%, 60%)`; // Цвет квадратов
        particle.style.border = "1px solid white"; // Бордюр квадратов
        break;
      case "symbol":
        particle.innerHTML = [
          "&#9884;",
          "&#9731;",
          "&#10084;",
          "&#10052;",
          "&#10054;",
          "&#9733;",
          "&#9787;",
        ][Math.floor(Math.random() * 7)]; // Символы
        particle.style.color = `hsl(${Math.random() * 50 + 200}, 70%, 60%)`; // Цвет символов
        particle.style.fontSize = `${Math.random() * 24 + 10}px`; // Размер символов
        width = height = "auto";
        break;
      case "logo":
        particle.style.backgroundImage = `url(${img})`; // Ссылка на картинку
        break;
      case "line":
        particle.style.background = `hsl(${
          Math.random() * 50 + 200
        }, 70%, 50%)`; // Цвет линий
        height = 1; // Размер
        rotation += 1000;
        delay = Math.random() * 1000;
        break;
    }
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate(
      [
        {
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
          opacity: 1,
        },
        {
          transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${
            y + destinationY
          }px) rotate(${rotation}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: Math.random() * 1000 + 5000, // Продолжительность всех эффектов
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
      }
    );
    animation.onfinish = () => {
      particle.remove();
    };
  }

  switch (type) {
    case "circle":
      return (
        <button
          className={`${styles.btn} ${styles.circle}`}
          style={styleComp}
          onMouseEnter={() => SoundPlay("/sound/hover.mp3")}
          onClick={(e) => {
            onClick();
            SoundPlay("/sound/pole_letter_correct.mp3");
            pop(e, "logo", "/start.png");
          }}
        >
          {children}
        </button>
      );

    case "help":
      return (
        <button
          className={`${styles.btn} ${styles.help}`}
          style={styleComp}
          onMouseEnter={() => SoundPlay("/sound/hover.mp3")}
          onClick={(e) => {
            onClick();
            SoundPlay("/sound/cent.mp3");
            pop(e, "logo", "/coin.png");
          }}
        >
          {children ? children : <IoHelp size={20} />}
        </button>
      );

    default:
      return (
        <button
          className={`${styles.btn} ${styles.bigCircle}`}
          style={styleComp}
          data-type="symbol"
          onMouseEnter={() => SoundPlay("/sound/hover.mp3")}
          onClick={(e) => {
            onClick();
            SoundPlay("/sound/up.mp3");
            pop(e, "logo", "/arrow-up.png");
          }}
        >
          {children}
        </button>
      );
  }
};
