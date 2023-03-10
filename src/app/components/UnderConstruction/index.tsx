/* eslint-disable camelcase */
import anime from 'animejs';
import React from 'react';
import styled, { useTheme } from 'styled-components/macro';

export function UnderConstruction() {
  const theme = useTheme();

  anime({
    targets: '#general',
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    duration: 500,
  });

  const smoke_tl = anime.timeline({
    autoplay: true,
    loop: true,
  });

  smoke_tl
    .add(
      {
        targets: '#smoke_b',
        opacity: [0, 1],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 1500,
      },
      0,
    )
    .add(
      {
        targets: '#smoke_w',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 1500,
      },
      '-=700',
    )
    .add(
      {
        targets: '#smoke_b2',
        opacity: [0, 1],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 1500,
      },
      600,
    )
    .add(
      {
        targets: '#smoke_w2',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        endDelay: 2000,
        duration: 1500,
      },
      '-=1000',
    );

  const hands_and_pong_tl = anime.timeline({
    autoplay: true,
    loop: true,
  });

  hands_and_pong_tl
    .add(
      {
        targets: '#pong_ball',
        transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
        translateY: [1, 30],
        translateX: [1, 103],
        easing: 'linear',
        duration: 1000,
      },
      0,
    )
    .add(
      {
        targets: '#pong_red_bar',
        transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
        translateY: [-25, 1],
        easing: 'easeInOutCubic',
        duration: 1000,
      },
      '-=900',
    )
    .add(
      {
        targets: '#pong_ball',
        transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
        translateY: [30, 25],
        translateX: [103, 1],
        easing: 'linear',
        duration: 1000,
      },
      '-=100',
    )
    .add(
      {
        targets: '#pong_black_bar',
        transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
        translateY: [1, 25],
        easing: 'easeInOutCubic',
        duration: 1000,

        changeBegin(anim) {
          hand1();
        },
      },
      '-=900',
    )
    .add(
      {
        targets: '#pong_ball',
        transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
        translateY: [25, 1],
        translateX: [1, 103],
        easing: 'linear',
        duration: 1000,
      },
      '-=100',
    )
    .add(
      {
        targets: '#pong_red_bar',
        transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
        translateY: [1, -25],
        easing: 'easeInOutCubic',
        duration: 1000,
      },
      '-=900',
    )
    .add(
      {
        targets: '#pong_ball',
        transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
        translateY: [1, 1],
        translateX: [103, 1],
        easing: 'linear',
        duration: 1000,
      },
      '-=100',
    )
    .add(
      {
        targets: '#pong_black_bar',
        transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
        translateY: [25, 1],
        easing: 'easeInOutCubic',
        duration: 1000,

        changeBegin(anim) {
          hand1();
        },
      },
      '-=900',
    );

  const hand1 = () => {
    const hand1_tl = anime.timeline({
      autoplay: true,
    });

    hand1_tl

      .add({
        targets: '#hand1',
        easing: 'easeOutQuad',
        translateY: [1, -5],
        duration: 150,
      })

      .add({
        targets: '#hand1',
        easing: 'easeOutQuad',
        translateY: [-5, 1],
        duration: 350,
      });
  };

  anime({
    targets: '#btn',
    easing: 'easeInOutQuad',
    stroke: '#000000',
    duration: 500,
    loop: true,
    direction: 'alternate',
  });

  const dots_tl = anime.timeline({
    autoplay: true,
    loop: true,
  });

  dots_tl
    .add(
      {
        targets: '#dot1',
        easing: 'easeInOutCubic',
        translateY: [0, -5],
        rotate: 90,
        duration: 500,
      },
      0,
    )
    .add({
      targets: '#dot1',
      easing: 'easeInOutCubic',
      translateY: [-5, 0],
      duration: 500,
    })
    .add(
      {
        targets: '#dot2',
        easing: 'easeInOutCubic',
        translateY: [0, -5],
        rotate: 90,
        duration: 500,
      },
      100,
    )
    .add(
      {
        targets: '#dot2',
        easing: 'easeInOutCubic',
        translateY: [-5, 0],
        duration: 500,
      },
      '-=400',
    )
    .add(
      {
        targets: '#dot3',
        easing: 'easeInOutCubic',
        translateY: [0, -5],
        rotate: 90,
        duration: 500,
      },
      200,
    )
    .add(
      {
        targets: '#dot3',
        easing: 'easeInOutCubic',
        translateY: [-5, 0],
        duration: 500,
        endDelay: 500,
      },
      '-=400',
    );

  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        id="general"
        // style={{ opacity: 0 }}
      >
        <g id="Frame 3">
          <rect width="500" height="500" fill="transparent" />
          <g id="Group">
            <g id="working">
              <g id="lines_bg">
                <path
                  id="line01"
                  d="M457.63 201.279H47.6359"
                  stroke={theme.card.background}
                  strokeWidth="34.3083"
                  strokeLinecap="round"
                />
                <path
                  id="line02"
                  d="M398.984 169.141H103.968"
                  stroke={theme.card.background}
                  strokeWidth="34.3083"
                  strokeLinecap="round"
                />
                <path
                  id="line03"
                  d="M387.467 233.88H145.072"
                  stroke={theme.card.background}
                  strokeWidth="34.3083"
                  strokeLinecap="round"
                />
                <path
                  id="line04"
                  d="M338.286 107.709H291.663"
                  stroke={theme.card.background}
                  strokeWidth="34.3083"
                  strokeLinecap="round"
                />
                <path
                  id="line05"
                  d="M87.2574 244.963H55.9893"
                  stroke={theme.card.background}
                  strokeWidth="34.3083"
                  strokeLinecap="round"
                />
              </g>
              <g id="Group 5.3">
                <path
                  id="Stroke 2130"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M110.316 201.431C110.316 205.577 113.468 208.942 117.361 208.942H149.065C152.957 208.942 156.11 205.577 156.11 201.431V160.118H110.316V201.431Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2130.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M110.316 204.63C110.316 207.01 113.468 208.943 117.361 208.943H149.065C152.957 208.943 156.11 207.01 156.11 204.63V180.909H110.316V204.63Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2132"
                  d="M121.583 160.118L111.784 142.516"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2133"
                  d="M107.909 143.806L114.072 160.121"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2131"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M110.765 122.803C106.889 128.715 112.631 131.956 113.968 135.129C115.384 138.487 114.006 141.709 110.645 143.125C99.753 147.715 96.5119 126.251 110.765 122.803Z"
                  stroke="#8223D2"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2134"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M144.118 160.119H155.385L161.018 148.851L162.896 137.584L153.507 143.218L144.118 160.119V160.119Z"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2135"
                  d="M161.019 148.852L153.507 143.219"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2136"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M140.363 160.119H125.34V122.562H140.363V160.119Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2137"
                  d="M125.341 130.074H132.852"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2138"
                  d="M125.339 137.584H129.095"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2139"
                  d="M125.341 145.096H132.852"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2140"
                  d="M125.339 152.607H129.095"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g id="Group 5.4">
                <path
                  id="Stroke 2129"
                  d="M406.214 147.519H409.969C416.193 147.519 421.236 152.563 421.236 158.786C421.236 165.009 416.193 170.053 409.969 170.053H406.214"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2130_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M406.213 181.32C406.213 185.466 402.852 188.831 398.702 188.831H364.9C360.75 188.831 357.389 185.466 357.389 181.32V140.007H406.213V181.32Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g id="Group 31.2">
                <g id="Exclude">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M139.312 233.915L127.333 206.963L94.9356 221.363L139.312 233.915ZM62.2037 226.692L133.169 195.15L159.409 254.186L62.2037 226.692Z"
                    fill="white"
                  />
                  <path
                    d="M139.312 233.915L138.728 235.978C139.528 236.204 140.387 235.947 140.932 235.319C141.477 234.69 141.609 233.804 141.271 233.044L139.312 233.915ZM127.333 206.963L129.292 206.092C128.811 205.01 127.544 204.523 126.462 205.004L127.333 206.963ZM94.9356 221.363L94.0647 219.403C93.2394 219.77 92.7324 220.615 92.7968 221.516C92.8611 222.416 93.483 223.18 94.352 223.426L94.9356 221.363ZM62.2037 226.692L61.3328 224.732C60.5076 225.099 60.0006 225.944 60.0649 226.844C60.1293 227.745 60.7511 228.509 61.6201 228.755L62.2037 226.692ZM133.169 195.15L135.128 194.279C134.647 193.197 133.38 192.709 132.298 193.19L133.169 195.15ZM159.409 254.186L158.825 256.249C159.625 256.475 160.484 256.219 161.029 255.59C161.574 254.962 161.706 254.075 161.368 253.315L159.409 254.186ZM141.271 233.044L129.292 206.092L125.373 207.834L137.352 234.785L141.271 233.044ZM126.462 205.004L94.0647 219.403L95.8065 223.322L128.204 208.923L126.462 205.004ZM94.352 223.426L138.728 235.978L139.895 231.851L95.5192 219.3L94.352 223.426ZM63.0747 228.651L134.04 197.109L132.298 193.19L61.3328 224.732L63.0747 228.651ZM131.209 196.021L157.449 255.057L161.368 253.315L135.128 194.279L131.209 196.021ZM159.992 252.122L62.7873 224.628L61.6201 228.755L158.825 256.249L159.992 252.122Z"
                    fill="black"
                  />
                </g>
                <path
                  id="Stroke 2116"
                  d="M142.501 249.405L144.446 245.467"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2117"
                  d="M131.936 246.414L133.881 242.476"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2118"
                  d="M121.369 243.427L123.314 239.489"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2119"
                  d="M110.835 240.377L112.749 236.502"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2120"
                  d="M100.242 237.45L102.186 233.512"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2121"
                  d="M89.6728 234.462L91.6173 230.523"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 2122"
                  d="M79.1085 231.474L81.0531 227.536"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g id="Group 908.3">
                <g id="Stroke 8340">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M190.51 243.834H171.76L186.76 183.834H329.26L344.26 243.834H325.51"
                    fill="white"
                  />
                  <path
                    d="M190.51 243.834H171.76L186.76 183.834H329.26L344.26 243.834H325.51"
                    stroke="black"
                    strokeWidth="4.28854"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <path
                  id="Stroke 8341"
                  d="M246.757 243.837H269.257"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8342"
                  d="M198.008 198.835H205.508"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8343"
                  d="M209.258 213.835H216.758"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8345"
                  d="M254.256 213.835H261.756"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8347"
                  d="M299.262 213.835H306.762"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="btn"
                  d="M220.51 198.835H228.01"
                  stroke="#D91B1B"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8349"
                  d="M243.01 198.835H250.51"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8350"
                  d="M265.508 198.835H273.008"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8351"
                  d="M288.008 198.835H295.508"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8352"
                  d="M310.511 198.835H318.011"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8353"
                  d="M198.008 228.835H205.508"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8354"
                  d="M220.51 228.835H228.01"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8355"
                  d="M243.01 228.835H250.51"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8356"
                  d="M265.508 228.835H273.008"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8357"
                  d="M288.008 228.835H295.508"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 8358"
                  d="M310.511 228.835H318.011"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="hands_group">
                  <g id="hand1">
                    <g id="hand1_w_line">
                      <g id="Stroke 8364">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M199.177 235.205L201.582 226.091C202.445 223.046 200.69 219.858 197.63 218.988C194.577 218.118 191.397 219.881 190.52 222.941L180.005 259.796C177.087 269.981 182.99 280.586 193.167 283.481L205.46 286.998C211.76 288.798 218.555 287.246 223.467 282.881C232.662 274.713 245.247 260.486 245.247 260.486C246.987 259.083 247.475 256.631 246.387 254.673C245.217 252.573 242.63 251.733 240.44 252.723L227.382 261.363L237.912 224.508C238.782 221.463 237.012 218.268 233.96 217.398C230.9 216.528 227.727 218.298 226.85 221.343L222.579 235.886"
                          fill="white"
                        />
                        <path
                          d="M199.177 235.205L201.582 226.091C202.445 223.046 200.69 219.858 197.63 218.988C194.577 218.118 191.397 219.881 190.52 222.941L180.005 259.796C177.087 269.981 182.99 280.586 193.167 283.481L205.46 286.998C211.76 288.798 218.555 287.246 223.467 282.881C232.662 274.713 245.247 260.486 245.247 260.486C246.987 259.083 247.475 256.631 246.387 254.673C245.217 252.573 242.63 251.733 240.44 252.723L227.382 261.363L237.912 224.508C238.782 221.463 237.012 218.268 233.96 217.398C230.9 216.528 227.727 218.298 226.85 221.343L222.579 235.886"
                          stroke="white"
                          strokeWidth="12.8656"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Stroke 8362">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M219.965 245.088L228.958 213.98C229.82 210.927 228.058 207.74 225.02 206.87C221.953 206 218.78 207.762 217.903 210.815L209.512 240.43"
                          fill="white"
                        />
                        <path
                          d="M219.965 245.088L228.958 213.98C229.82 210.927 228.058 207.74 225.02 206.87C221.953 206 218.78 207.762 217.903 210.815L209.512 240.43"
                          stroke="white"
                          strokeWidth="12.8656"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Stroke 8363">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M209.4 240.771L215.797 218.2C216.667 215.147 214.897 211.96 211.845 211.09C208.785 210.212 205.605 211.99 204.727 215.035L196.676 243.044"
                          fill="white"
                        />
                        <path
                          d="M209.4 240.771L215.797 218.2C216.667 215.147 214.897 211.96 211.845 211.09C208.785 210.212 205.605 211.99 204.727 215.035L196.676 243.044"
                          stroke="white"
                          strokeWidth="12.8656"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <g id="hand1_line">
                      <g id="Stroke 8364_2">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M199.177 235.205L201.582 226.091C202.445 223.046 200.69 219.858 197.63 218.988C194.577 218.118 191.397 219.881 190.52 222.941L180.005 259.796C177.087 269.981 182.99 280.586 193.167 283.481L205.46 286.998C211.76 288.798 218.555 287.246 223.467 282.881C232.662 274.713 245.247 260.486 245.247 260.486C246.987 259.083 247.475 256.631 246.387 254.673C245.217 252.573 242.63 251.733 240.44 252.723L227.382 261.363L237.912 224.508C238.782 221.463 237.012 218.268 233.96 217.398C230.9 216.528 227.727 218.298 226.85 221.343L222.579 235.886"
                          fill="white"
                        />
                        <path
                          d="M199.177 235.205L201.582 226.091C202.445 223.046 200.69 219.858 197.63 218.988C194.577 218.118 191.397 219.881 190.52 222.941L180.005 259.796C177.087 269.981 182.99 280.586 193.167 283.481L205.46 286.998C211.76 288.798 218.555 287.246 223.467 282.881C232.662 274.713 245.247 260.486 245.247 260.486C246.987 259.083 247.475 256.631 246.387 254.673C245.217 252.573 242.63 251.733 240.44 252.723L227.382 261.363L237.912 224.508C238.782 221.463 237.012 218.268 233.96 217.398C230.9 216.528 227.727 218.298 226.85 221.343L222.579 235.886"
                          stroke="black"
                          strokeWidth="4.28854"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Stroke 8362_2">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M219.965 245.088L228.958 213.98C229.82 210.927 228.058 207.74 225.02 206.87C221.953 206 218.78 207.762 217.903 210.815L209.512 240.43"
                          fill="white"
                        />
                        <path
                          d="M219.965 245.088L228.958 213.98C229.82 210.927 228.058 207.74 225.02 206.87C221.953 206 218.78 207.762 217.903 210.815L209.512 240.43"
                          stroke="black"
                          strokeWidth="4.28854"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Stroke 8363_2">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M209.4 240.771L215.797 218.2C216.667 215.147 214.897 211.96 211.845 211.09C208.785 210.212 205.605 211.99 204.727 215.035L196.676 243.044"
                          fill="white"
                        />
                        <path
                          d="M209.4 240.771L215.797 218.2C216.667 215.147 214.897 211.96 211.845 211.09C208.785 210.212 205.605 211.99 204.727 215.035L196.676 243.044"
                          stroke="black"
                          strokeWidth="4.28854"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="hand2">
                    <g id="hand2_w_line">
                      <g id="Stroke 8364_3">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M317.107 235.205L314.701 226.091C313.839 223.046 315.594 219.858 318.654 218.988C321.706 218.118 324.886 219.881 325.764 222.941L336.279 259.796C339.196 269.981 333.294 280.586 323.116 283.481L310.824 286.999C304.524 288.799 297.729 287.246 292.816 282.881C283.621 274.714 271.036 260.486 271.036 260.486C269.296 259.084 268.809 256.631 269.896 254.674C271.066 252.574 273.654 251.734 275.844 252.724L288.901 261.364L278.371 224.508C277.501 221.463 279.271 218.268 282.324 217.398C285.384 216.528 288.556 218.298 289.434 221.343L293.704 235.886"
                          fill="white"
                        />
                        <path
                          d="M317.107 235.205L314.701 226.091C313.839 223.046 315.594 219.858 318.654 218.988C321.706 218.118 324.886 219.881 325.764 222.941L336.279 259.796C339.196 269.981 333.294 280.586 323.116 283.481L310.824 286.999C304.524 288.799 297.729 287.246 292.816 282.881C283.621 274.714 271.036 260.486 271.036 260.486C269.296 259.084 268.809 256.631 269.896 254.674C271.066 252.574 273.654 251.734 275.844 252.724L288.901 261.364L278.371 224.508C277.501 221.463 279.271 218.268 282.324 217.398C285.384 216.528 288.556 218.298 289.434 221.343L293.704 235.886"
                          stroke="white"
                          strokeWidth="12.8656"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Stroke 8362_3">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M296.319 245.088L287.326 213.98C286.463 210.928 288.226 207.74 291.263 206.87C294.331 206 297.503 207.763 298.381 210.815L306.771 240.43"
                          fill="white"
                        />
                        <path
                          d="M296.319 245.088L287.326 213.98C286.463 210.928 288.226 207.74 291.263 206.87C294.331 206 297.503 207.763 298.381 210.815L306.771 240.43"
                          stroke="white"
                          strokeWidth="12.8656"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Stroke 8363_3">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M306.883 240.772L300.486 218.2C299.616 215.148 301.386 211.96 304.439 211.09C307.499 210.213 310.679 211.99 311.556 215.035L319.607 243.044"
                          fill="white"
                        />
                        <path
                          d="M306.883 240.772L300.486 218.2C299.616 215.148 301.386 211.96 304.439 211.09C307.499 210.213 310.679 211.99 311.556 215.035L319.607 243.044"
                          stroke="white"
                          strokeWidth="12.8656"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <g id="hand2_line">
                      <g id="Stroke 8364_4">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M317.107 235.205L314.701 226.091C313.839 223.046 315.594 219.858 318.654 218.988C321.706 218.118 324.886 219.881 325.764 222.941L336.279 259.796C339.196 269.981 333.294 280.586 323.116 283.481L310.824 286.999C304.524 288.799 297.729 287.246 292.816 282.881C283.621 274.714 271.036 260.486 271.036 260.486C269.296 259.084 268.809 256.631 269.896 254.674C271.066 252.574 273.654 251.734 275.844 252.724L288.901 261.364L278.371 224.508C277.501 221.463 279.271 218.268 282.324 217.398C285.384 216.528 288.556 218.298 289.434 221.343L293.704 235.886"
                          fill="white"
                        />
                        <path
                          d="M317.107 235.205L314.701 226.091C313.839 223.046 315.594 219.858 318.654 218.988C321.706 218.118 324.886 219.881 325.764 222.941L336.279 259.796C339.196 269.981 333.294 280.586 323.116 283.481L310.824 286.999C304.524 288.799 297.729 287.246 292.816 282.881C283.621 274.714 271.036 260.486 271.036 260.486C269.296 259.084 268.809 256.631 269.896 254.674C271.066 252.574 273.654 251.734 275.844 252.724L288.901 261.364L278.371 224.508C277.501 221.463 279.271 218.268 282.324 217.398C285.384 216.528 288.556 218.298 289.434 221.343L293.704 235.886"
                          stroke="black"
                          strokeWidth="4.28854"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Stroke 8362_4">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M296.319 245.088L287.326 213.98C286.463 210.928 288.226 207.74 291.263 206.87C294.331 206 297.503 207.763 298.381 210.815L306.771 240.43"
                          fill="white"
                        />
                        <path
                          d="M296.319 245.088L287.326 213.98C286.463 210.928 288.226 207.74 291.263 206.87C294.331 206 297.503 207.763 298.381 210.815L306.771 240.43"
                          stroke="black"
                          strokeWidth="4.28854"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <g id="Stroke 8363_4">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M306.883 240.772L300.486 218.2C299.616 215.148 301.386 211.96 304.439 211.09C307.499 210.213 310.679 211.99 311.556 215.035L319.607 243.044"
                          fill="white"
                        />
                        <path
                          d="M306.883 240.772L300.486 218.2C299.616 215.148 301.386 211.96 304.439 211.09C307.499 210.213 310.679 211.99 311.556 215.035L319.607 243.044"
                          stroke="black"
                          strokeWidth="4.28854"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id="Rectangle 3.1">
                <mask id="path-71-inside-1" fill="white">
                  <rect
                    x="184.702"
                    y="101"
                    width="146.078"
                    height="85.1007"
                    rx="2.14427"
                  />
                </mask>
                <rect
                  x="184.702"
                  y="101"
                  width="146.078"
                  height="85.1007"
                  rx="2.14427"
                  fill="white"
                  stroke="black"
                  strokeWidth="8.57707"
                  strokeLinecap="round"
                  mask="url(#path-71-inside-1)"
                />
              </g>
              <line
                id="pong_black_bar"
                x1="199.443"
                y1="118.422"
                x2="199.443"
                y2="142.419"
                stroke="black"
                strokeWidth="4.28854"
                strokeLinecap="round"
              />
              <line
                id="pong_red_bar"
                x1="317.379"
                y1="148.442"
                x2="317.379"
                y2="172.439"
                stroke="#8223D2"
                strokeWidth="4.28854"
                strokeLinecap="round"
              />
              <circle
                id="pong_ball"
                cx="206.844"
                cy="130.421"
                r="4.02038"
                fill="white"
                stroke="black"
                strokeWidth="4.28854"
              />
              <g id="smoke_group">
                <path
                  id="smoke_b"
                  d="M369.541 126.981C349.59 107.03 389.354 100.24 369.817 80.7027"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="smoke_w"
                  d="M374.02 131.725C343.464 106.664 395.192 99.4272 365.308 76.3763"
                  stroke="white"
                  strokeWidth="6.43281"
                  strokeLinejoin="round"
                />
              </g>
              <g id="smoke_group2">
                <path
                  id="smoke_b2"
                  d="M386.766 111.972C406.717 92.0212 366.953 85.2306 386.49 65.6936"
                  stroke="black"
                  strokeWidth="4.28854"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="smoke_w2"
                  d="M382.286 116.716C412.843 91.655 361.114 84.4181 390.999 61.3672"
                  stroke="white"
                  strokeWidth="6.43281"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g id="Group_2">
              <g id="dots">
                <path
                  id="dot1"
                  d="M319.407 384.177H324.426V379.193H319.407V384.177Z"
                  fill={theme.text}
                />
                <path
                  id="dot2"
                  d="M327.046 384.177H332.065V379.193H327.046V384.177Z"
                  fill={theme.text}
                />
                <path
                  id="dot3"
                  d="M334.684 384.177H339.703V379.193H334.684V384.177Z"
                  fill={theme.text}
                />
              </g>
            </g>
          </g>
          <g id="We??????re still working on this screen...">
            <path
              d="M112.218 344.196H116.471L119.264 332.04C119.645 330.39 119.994 328.009 119.994 328.009H120.057C120.057 328.009 120.47 330.39 120.851 332.04L123.612 344.196H127.897L134.371 321.503H129.833L126.976 332.738C126.532 334.706 125.865 337.721 125.865 337.721H125.802C125.802 337.721 125.231 334.865 124.755 332.865L122.279 321.503H117.836L115.36 332.897C114.884 334.897 114.313 337.721 114.313 337.721H114.249C114.249 337.721 113.71 334.706 113.265 332.77L110.314 321.503H105.616L112.218 344.196Z"
              fill={theme.text}
            />
            <path
              d="M141.84 344.672C146.03 344.672 148.6 342.228 149.203 339.34H144.951C144.474 340.578 143.491 341.339 141.808 341.339C139.365 341.339 137.968 339.784 137.651 337.277H149.457C149.457 331.469 146.664 327.47 141.428 327.47C136.667 327.47 133.398 331.215 133.398 336.039C133.398 340.895 136.445 344.672 141.84 344.672ZM141.491 330.802C143.459 330.802 144.824 332.231 144.951 334.294H137.714C138.095 332.167 139.206 330.802 141.491 330.802Z"
              fill={theme.text}
            />
            <path
              d="M150.454 330.009C152.581 329.66 154.803 328.136 154.803 325.248V321.503H150.518V325.629H152.613C152.613 327.184 151.438 328.2 150.454 328.517V330.009Z"
              fill={theme.text}
            />
            <path
              d="M161.223 327.914H157.065V344.196H161.382V336.261C161.382 332.834 163.413 331.342 166.237 331.628H166.333V327.851C166.079 327.755 165.793 327.724 165.317 327.724C163.413 327.724 162.302 328.676 161.318 330.517H161.223V327.914Z"
              fill={theme.text}
            />
            <path
              d="M175.376 344.672C179.566 344.672 182.136 342.228 182.739 339.34H178.486C178.01 340.578 177.026 341.339 175.344 341.339C172.901 341.339 171.504 339.784 171.187 337.277H182.993C182.993 331.469 180.2 327.47 174.963 327.47C170.203 327.47 166.934 331.215 166.934 336.039C166.934 340.895 169.981 344.672 175.376 344.672ZM175.027 330.802C176.995 330.802 178.359 332.231 178.486 334.294H171.25C171.631 332.167 172.742 330.802 175.027 330.802Z"
              fill={theme.text}
            />
            <path
              d="M196.924 344.672C200.986 344.672 203.779 342.704 203.779 339.435C203.779 335.627 200.764 334.865 198.034 334.294C195.718 333.817 193.559 333.691 193.559 332.294C193.559 331.12 194.67 330.485 196.352 330.485C198.193 330.485 199.304 331.12 199.494 332.865H203.398C203.081 329.596 200.7 327.47 196.416 327.47C192.702 327.47 189.783 329.152 189.783 332.675C189.783 336.23 192.639 337.023 195.559 337.594C197.781 338.039 199.844 338.197 199.844 339.753C199.844 340.895 198.764 341.625 196.86 341.625C194.924 341.625 193.591 340.8 193.305 338.927H189.306C189.56 342.387 192.195 344.672 196.924 344.672Z"
              fill={theme.text}
            />
            <path
              d="M204.464 330.771H206.718V340.324C206.718 343.402 209.034 344.228 211.129 344.228C212.843 344.228 213.827 344.164 213.827 344.164V340.99C213.827 340.99 213.097 341.022 212.557 341.022C211.605 341.022 210.939 340.609 210.939 339.403V330.771H213.732V327.914H210.939V322.836H206.718V327.914H204.464V330.771Z"
              fill={theme.text}
            />
            <path
              d="M215.954 344.196H220.271V327.914H215.954V344.196ZM215.954 325.375H220.271V321.503H215.954V325.375Z"
              fill={theme.text}
            />
            <path
              d="M223.116 344.196H227.432V321.503H223.116V344.196Z"
              fill={theme.text}
            />
            <path
              d="M230.337 344.196H234.654V321.503H230.337V344.196Z"
              fill={theme.text}
            />
            <path
              d="M246.318 344.196H250.222L252.443 336.198C252.792 334.897 253.205 333.373 253.205 333.373H253.268C253.268 333.373 253.649 334.897 253.998 336.198L256.157 344.196H260.092L264.948 327.914H260.759L258.696 335.468C258.347 336.801 257.966 338.515 257.966 338.515H257.902C257.902 338.515 257.49 336.801 257.141 335.436L255.014 327.914H251.332L249.301 335.436C248.952 336.769 248.603 338.515 248.603 338.515H248.539C248.539 338.515 248.159 336.801 247.809 335.468L245.842 327.914H241.557L246.318 344.196Z"
              fill={theme.text}
            />
            <path
              d="M273.723 344.672C278.769 344.672 282.229 340.927 282.229 336.071C282.229 331.215 278.769 327.47 273.723 327.47C268.676 327.47 265.217 331.215 265.217 336.071C265.217 340.927 268.676 344.672 273.723 344.672ZM273.723 341.371C271.057 341.371 269.597 339.245 269.597 336.071C269.597 332.897 271.057 330.739 273.723 330.739C276.357 330.739 277.849 332.897 277.849 336.071C277.849 339.245 276.357 341.371 273.723 341.371Z"
              fill={theme.text}
            />
            <path
              d="M288.393 327.914H284.235V344.196H288.551V336.261C288.551 332.834 290.583 331.342 293.407 331.628H293.503V327.851C293.249 327.755 292.963 327.724 292.487 327.724C290.583 327.724 289.472 328.676 288.488 330.517H288.393V327.914Z"
              fill={theme.text}
            />
            <path
              d="M306.09 344.196H311.326L304.598 334.103L310.596 327.914H305.423L299.647 334.071V321.503H295.362V344.196H299.647V338.705L301.519 336.769L306.09 344.196Z"
              fill={theme.text}
            />
            <path
              d="M312.688 344.196H317.004V327.914H312.688V344.196ZM312.688 325.375H317.004V321.503H312.688V325.375Z"
              fill={theme.text}
            />
            <path
              d="M324.007 327.914H319.786V344.196H324.102V334.96C324.102 332.738 325.498 331.215 327.403 331.215C329.212 331.215 330.227 332.453 330.227 334.198V344.196H334.544V333.564C334.544 330.009 332.29 327.47 328.926 327.47C326.705 327.47 325.213 328.39 324.102 330.136H324.007V327.914Z"
              fill={theme.text}
            />
            <path
              d="M344.377 349.75C346.789 349.75 348.884 349.179 350.249 347.909C351.455 346.798 352.185 345.243 352.185 342.958V327.914H348.027V329.628H347.964C346.98 328.263 345.488 327.47 343.457 327.47C339.331 327.47 336.411 330.58 336.411 335.436C336.411 340.356 339.966 343.212 343.584 343.212C345.647 343.212 346.885 342.387 347.837 341.308H347.932V343.085C347.932 345.307 346.758 346.481 344.314 346.481C342.314 346.481 341.394 345.688 341.045 344.672H336.76C337.204 347.846 339.934 349.75 344.377 349.75ZM344.314 339.753C342.092 339.753 340.632 338.134 340.632 335.373C340.632 332.643 342.092 330.929 344.282 330.929C346.885 330.929 348.154 332.961 348.154 335.341C348.154 337.753 347.043 339.753 344.314 339.753Z"
              fill={theme.text}
            />
            <path
              d="M368.008 344.672C373.054 344.672 376.513 340.927 376.513 336.071C376.513 331.215 373.054 327.47 368.008 327.47C362.961 327.47 359.502 331.215 359.502 336.071C359.502 340.927 362.961 344.672 368.008 344.672ZM368.008 341.371C365.342 341.371 363.882 339.245 363.882 336.071C363.882 332.897 365.342 330.739 368.008 330.739C370.642 330.739 372.134 332.897 372.134 336.071C372.134 339.245 370.642 341.371 368.008 341.371Z"
              fill={theme.text}
            />
            <path
              d="M382.741 327.914H378.52V344.196H382.836V334.96C382.836 332.738 384.233 331.215 386.137 331.215C387.946 331.215 388.962 332.453 388.962 334.198V344.196H393.278V333.564C393.278 330.009 391.025 327.47 387.661 327.47C385.439 327.47 383.947 328.39 382.836 330.136H382.741V327.914Z"
              fill={theme.text}
            />
            <path
              d="M164.714 370.771H166.967V380.324C166.967 383.402 169.284 384.228 171.379 384.228C173.093 384.228 174.077 384.164 174.077 384.164V380.99C174.077 380.99 173.347 381.022 172.807 381.022C171.855 381.022 171.188 380.609 171.188 379.403V370.771H173.981V367.914H171.188V362.836H166.967V367.914H164.714V370.771Z"
              fill={theme.text}
            />
            <path
              d="M180.521 361.503H176.204V384.196H180.521V374.96C180.521 372.738 181.917 371.215 183.821 371.215C185.63 371.215 186.646 372.453 186.646 374.198V384.196H190.962V373.564C190.962 370.009 188.709 367.47 185.345 367.47C183.123 367.47 181.79 368.327 180.616 370.041H180.521V361.503Z"
              fill={theme.text}
            />
            <path
              d="M193.623 384.196H197.939V367.914H193.623V384.196ZM193.623 365.375H197.939V361.503H193.623V365.375Z"
              fill={theme.text}
            />
            <path
              d="M207.322 384.672C211.385 384.672 214.178 382.704 214.178 379.435C214.178 375.627 211.163 374.865 208.433 374.294C206.116 373.817 203.958 373.691 203.958 372.294C203.958 371.12 205.069 370.485 206.751 370.485C208.592 370.485 209.703 371.12 209.893 372.865H213.797C213.479 369.596 211.099 367.47 206.814 367.47C203.101 367.47 200.181 369.152 200.181 372.675C200.181 376.23 203.038 377.023 205.957 377.594C208.179 378.039 210.242 378.197 210.242 379.753C210.242 380.895 209.163 381.625 207.259 381.625C205.323 381.625 203.99 380.8 203.704 378.927H199.705C199.959 382.387 202.593 384.672 207.322 384.672Z"
              fill={theme.text}
            />
            <path
              d="M228.057 384.672C232.12 384.672 234.913 382.704 234.913 379.435C234.913 375.627 231.898 374.865 229.168 374.294C226.851 373.817 224.693 373.691 224.693 372.294C224.693 371.12 225.804 370.485 227.486 370.485C229.327 370.485 230.438 371.12 230.628 372.865H234.532C234.215 369.596 231.834 367.47 227.55 367.47C223.836 367.47 220.916 369.152 220.916 372.675C220.916 376.23 223.773 377.023 226.693 377.594C228.914 378.039 230.977 378.197 230.977 379.753C230.977 380.895 229.898 381.625 227.994 381.625C226.058 381.625 224.725 380.8 224.439 378.927H220.44C220.694 382.387 223.328 384.672 228.057 384.672Z"
              fill={theme.text}
            />
            <path
              d="M244.569 384.672C248.917 384.672 251.615 381.911 251.9 378.451H247.743C247.457 380.292 246.219 381.212 244.474 381.212C241.839 381.212 240.602 379.149 240.602 376.071C240.602 372.929 241.935 370.929 244.537 370.929C246.124 370.929 247.235 372.008 247.52 373.437H251.742C251.17 369.914 248.568 367.47 244.347 367.47C239.395 367.47 236.222 371.215 236.222 376.071C236.222 380.927 239.427 384.672 244.569 384.672Z"
              fill={theme.text}
            />
            <path
              d="M257.941 367.914H253.783V384.196H258.099V376.261C258.099 372.834 260.131 371.342 262.955 371.628H263.051V367.851C262.797 367.755 262.511 367.724 262.035 367.724C260.131 367.724 259.02 368.676 258.036 370.517H257.941V367.914Z"
              fill={theme.text}
            />
            <path
              d="M272.094 384.672C276.283 384.672 278.854 382.228 279.457 379.34H275.204C274.728 380.578 273.744 381.339 272.062 381.339C269.618 381.339 268.222 379.784 267.905 377.277H279.711C279.711 371.469 276.918 367.47 271.681 367.47C266.921 367.47 263.652 371.215 263.652 376.039C263.652 380.895 266.699 384.672 272.094 384.672ZM271.745 370.802C273.713 370.802 275.077 372.231 275.204 374.294H267.968C268.349 372.167 269.46 370.802 271.745 370.802Z"
              fill={theme.text}
            />
            <path
              d="M289.358 384.672C293.547 384.672 296.118 382.228 296.721 379.34H292.468C291.992 380.578 291.008 381.339 289.326 381.339C286.882 381.339 285.486 379.784 285.168 377.277H296.975C296.975 371.469 294.182 367.47 288.945 367.47C284.185 367.47 280.916 371.215 280.916 376.039C280.916 380.895 283.962 384.672 289.358 384.672ZM289.009 370.802C290.977 370.802 292.341 372.231 292.468 374.294H285.232C285.613 372.167 286.724 370.802 289.009 370.802Z"
              fill={theme.text}
            />
            <path
              d="M303.194 367.914H298.973V384.196H303.289V374.96C303.289 372.738 304.686 371.215 306.59 371.215C308.399 371.215 309.415 372.453 309.415 374.198V384.196H313.731V373.564C313.731 370.009 311.478 367.47 308.113 367.47C305.892 367.47 304.4 368.39 303.289 370.136H303.194V367.914Z"
              fill={theme.text}
            />
          </g>
        </g>
      </svg>
    </Container>
  );
}

const Container = styled.div`
  body {
    justify-content: top;
    text-align: center;
  }

  /* stylelint-disable-next-line selector-max-id */
  #Frame1 {
    transform-box: fill-box;
    transform-origin: center center;
  }

  /* stylelint-disable-next-line selector-max-id */
  #dot1 {
    transform-box: fill-box;
    transform-origin: center center;
  }

  /* stylelint-disable-next-line selector-max-id */
  #dot2 {
    transform-box: fill-box;
    transform-origin: center center;
  }

  /* stylelint-disable-next-line selector-max-id */
  #dot3 {
    transform-box: fill-box;
    transform-origin: center center;
  }
`;
