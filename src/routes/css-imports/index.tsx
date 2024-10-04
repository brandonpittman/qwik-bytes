import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="wrapper">
      <h1>CSS Imports</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget
        mi congue, sodales elit bibendum, congue enim. Nunc rhoncus elementum
        lacus, ac porttitor eros luctus at. Donec eleifend nisi nec sapien
        interdum interdum. Nunc bibendum pharetra est, vel ornare libero
        imperdiet a. Curabitur aliquam, elit ac pellentesque sagittis, tortor
        velit dictum risus, in tincidunt ante odio placerat quam. Suspendisse
        nec finibus nulla. Quisque ac ante ac orci dignissim placerat. Nullam
        pellentesque purus non auctor sodales. Nullam at velit lacinia,
        tristique dui at, bibendum purus. In sodales risus eu nibh tempus, eget
        mattis massa semper. Vivamus sit amet maximus nisi, nec auctor turpis.
        Morbi scelerisque porttitor dignissim.
      </p>

      <p>
        Donec et sapien ac libero vestibulum convallis. Praesent varius dictum
        justo vel pulvinar. Integer scelerisque sodales convallis. Aliquam erat
        volutpat. Quisque sapien ante, laoreet sed elementum quis, iaculis nec
        diam. Proin et lorem sed quam rhoncus luctus. Fusce ultrices turpis ac
        suscipit sollicitudin. Mauris et enim vestibulum, tristique lorem at,
        hendrerit augue. In ante odio, tincidunt non magna eget, eleifend
        scelerisque orci. Donec pellentesque mi dui, id cursus orci euismod nec.
        Etiam justo massa, luctus id ultrices et, aliquet eget orci. Nunc tempus
        justo quis eros commodo, quis venenatis velit suscipit. Nam lorem dolor,
        euismod et pulvinar id, dignissim id nunc. Nullam porta augue vitae
        lacinia scelerisque. Vestibulum volutpat ultricies eros non luctus.
      </p>

      <p>
        Aenean ac mattis sem. Sed sapien magna, rutrum ac orci et, pretium
        porttitor quam. Aenean rutrum velit aliquet, tempor metus non, laoreet
        mi. Donec tincidunt vitae enim sit amet mattis. Phasellus condimentum
        nisl nisl. Cras faucibus sem vitae interdum finibus. Morbi imperdiet
        lectus orci, eget convallis dolor tincidunt ut. Vestibulum fringilla
        nunc leo, vitae venenatis dui facilisis nec. Vestibulum placerat, diam a
        pharetra sollicitudin, arcu ex sagittis est, ut hendrerit sapien velit
        ullamcorper augue.
      </p>

      <p>
        Quisque mi magna, tristique ut velit sit amet, pretium iaculis metus.
        Nam vel efficitur enim. Donec accumsan convallis libero. Phasellus
        hendrerit justo velit, ut vehicula quam fringilla eu. Nullam non augue
        sapien. Integer eu nunc tristique, euismod purus eu, blandit arcu. Nulla
        quis urna sit amet massa finibus scelerisque. Mauris sem est, feugiat
        vitae mi at, tempor posuere neque. Vestibulum sit amet est quis dui
        volutpat facilisis et non turpis.
      </p>

      <p>
        Nulla facilisi. Donec eget sem sit amet lectus sollicitudin interdum a
        vel diam. In tempus, velit vel pharetra sagittis, erat ante mollis nibh,
        in efficitur justo leo non augue. Proin dapibus eu lacus eu fringilla.
        Fusce leo odio, fringilla at euismod nec, rutrum eget turpis. Maecenas
        porta volutpat enim, eu eleifend lacus vulputate sed. Phasellus
        fringilla dolor vitae accumsan hendrerit. Donec nec neque massa. Duis
        ultricies convallis ex sed suscipit. Etiam fringilla ante sed pulvinar
        semper.
      </p>
    </div>
  );
});
