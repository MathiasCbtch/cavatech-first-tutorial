import { d as o } from './QBtn-DYb13IGb.js';
import { I as s, T as l, S as t, N as r, K as n } from './index-DH-D3uAp.js';
import './render-DAqPa2vd.js';
const a = { class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center' },
  u = s({
    __name: 'ErrorNotFound',
    setup(i) {
      return (c, e) => (
        n(),
        l('div', a, [
          t('div', null, [
            e[0] || (e[0] = t('div', { style: { 'font-size': '30vh' } }, ' 404 ', -1)),
            e[1] ||
              (e[1] = t(
                'div',
                { class: 'text-h2', style: { opacity: '.4' } },
                ' Oops. Nothing here... ',
                -1,
              )),
            r(o, {
              class: 'q-mt-xl',
              color: 'white',
              'text-color': 'blue',
              unelevated: '',
              to: '/',
              label: 'Go Home',
              'no-caps': '',
            }),
          ]),
        ])
      );
    },
  });
export { u as default };
