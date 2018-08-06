import React, { Component } from 'react';
import {
  Tab, TabBar, TabBarScroller, TabIcon, TabIconText,
} from 'rmwc/Tabs';
import CopyToClipboard from 'react-copy-to-clipboard';

import './UnicodeCharacterPicker.scss';

const charactersMap = [
  {
    name: 'Our favorite set',
    icon: 'favorite_border',
    characters: '⌘⌥⇧←→↑↓⬇⬆«»‹›✓✗✔✘▲▼◀▶▴▾◂▸⟵⟶⟳•⚑⚐★☆⚠█░',
  },
  {
    name: 'Arrows',
    icon: 'arrow_forward',
    characters: '↪↩←↑→↓↔↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↦↥↧↨↫↬↭↮↯↰↱↲↴↳↵↶↷↸↹↺↻⟲⟳↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇏⇎⇑⇓⇐⇒⇔⇕⇖⇗⇘⇙⇳⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇨⇩⇪⇧⇫⇬⇭⇮⇯⇰⇱⇲⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿⟰⟱⟴⟵⟶⟷⟸⟹⟽⟾⟺⟻⟼⟿⤀⤁⤅⤂⤃⤄⤆⤇⤈⤉⤊⤋⤌⤍⤎⤏⤐⤑⤒⤓⤔⤕⤖⤗⤘⤙⤚⤛⤜⤝⤞⤟⤠⤡⤢⤣⤤⤥⤦⤧⤨⤩⤪⤭⤮⤯⤰⤱⤲⤳⤻⤸⤾⤿⤺⤼⤽⤴⤵⤶⤷⤹⥀⥁⥂⥃⥄⥅⥆⥇⥈⥉⥒⥓⥔⥕⥖⥗⥘⥙⥚⥛⥜⥝⥞⥟⥠⥡⥢⥣⥤⥥⥦⥧⥨⥩⥪⥫⥬⥭⥮⥯⥰⥱⥲⥳⥴⥵⥶⥷⥸⥹⥺⥻➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪➫➬➭➮➯➱➲➳➴➵➶➷➸➹➺➻➼➽➾⬀⬁⬂⬃⬄⬅⬆⬇⬈⬉⬊⬋⬌⬍⏎▲▼◀▶⬎⬏⬐⬑☇☈⍃⍄⍇⍈⍐⍗⍌⍓⍍⍔⍏⍖⍅⍆',
  },
  {
    name: 'Graphic shapes',
    icon: 'grid_on',
    characters: '▲▼◀▶◢◣◥◤△▽◿◺◹◸▴▾◂▸▵▿◃▹◁▷◅▻◬⟁⧋⧊⊿∆∇◭◮⧩⧨⌔⟐◇◆◈⬖⬗⬘⬙⬠⬡⎔⋄◊⧫⬢⬣▰▪◼▮◾▗▖■∎▃▄▅▆▇█▌▐▍▎▉▊▋❘❙❚▀▘▝▙▚▛▜▟▞░▒▓▂▁▬▔▫▯▭▱◽□◻▢⊞⊡⊟⊠▣▤▥▦⬚▧▨▩⬓◧⬒◨◩◪⬔⬕❏❐❑❒⧈◰◱◳◲◫⧇⧅⧄⍁⍂⟡⧉○◌◍◎◯❍◉⦾⊙⦿⊜⊖⊘⊚⊛⊝●⚫⦁◐◑◒◓◔◕⦶⦸◵◴◶◷⊕⊗⦇⦈⦉⦊❨❩⸨⸩◖◗❪❫❮❯❬❭❰❱⊏⊐⊑⊒◘◙◚◛◜◝◞◟◠◡⋒⋓⋐⋑⥰╰╮╭╯⌒⥿⥾⥽⥼⥊⥋⥌⥍⥎⥐⥑⥏╳✕⤫⤬╱╲⧸⧹⌓◦❖✖✚✜⧓⧗⧑⧒⧖_⚊╴╼╾‐⁃‑‒-–⎯—―╶╺╸─━┄┅┈┉╌╍═≣≡☰☱☲☳☴☵☶☷╵╷╹╻│▕▏┃┆┇┊╎┋╿╽⌞⌟⌜⌝⌊⌋⌈⌉┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╏║╔╒╓╕╖╗╚╘╙╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬',
  },
  {
    name: 'Symbols',
    icon: 'check',
    characters: '☂☔✈☀☼☁⚡⌁☇☈❄❅❆☃☉☄★☆☽☾⌛⌚⌂✆☎☏✉☑✓✔⎷⍻✖✗✘☒✕☓☕♿✌☚☛☜☝☞☟☹☺☻☯⚘☮⚰⚱⚠☠☢⚔⚓⎈⚒⚑⚐☡❂⚕⚖⚗✇☣⚙☤⚚⚛⚜☥✝☦☧☨☩†☪☫☬☭✁✂✃✄✍✎✏✐✑✒✙✚✜✛♰♱✞✟✠✡☸✢✣✤✥✦✧✩✪✫✬✭✮✯✰✲✱✳✴✵✶✷✸✹✺✻✼✽✾❀✿❁❃❇❈❉❊❋⁕☘❦❧☙❢❣♀♂⚢⚣⚤⚦⚧⚨⚩☿♁⚯♛♕♚♔♜♖♝♗♞♘♟♙☗☖♠♣♦♥❤❥♡♢♤♧⚀⚁⚂⚃⚄⚅⚇⚆⚈⚉♨♩♪♫♬♭♮♯⌨⏏⎗⎘⎙⎚⌥⎇⌘⌦⌫⌧♲♳♴♵♶♷♸♹♺♻♼♽⁌⁍⎌⌇⌲⍝⍟⍣⍤⍥⍨⍩⎋♃♄♅♆♇♈♉♊♋♌♍♎♏♐♑♒♓⏚⏛',
  },
  {
    name: 'Emoji',
    icon: 'tag_faces',
    characters: '🎳🏂🌁🌉🌋🌌🌏🌑🌓🌔🌕🌛🌠🌰🍏🌱🌼🌽🌿🍄🍇🍈🍌🍍🍑🍒🍩🍕🍖🍗🍠🍤🍥🍨🍪🍫🍬🍭🍮🍯🍷🍹🎊🎋🎠🎣🎭🎮🎲🎴🎹🎻🎼🎽🏡🏮🐌🐜🐝🐞🐡🐢🐣🐥🐩🐼🐽🐾👅👓👖👚👛👝👤👪👰👹👺💌💕💖💞💠💥💧💫💬💮💯💲💳💴💵💸💾📁📂📃📄📅📆📇📈📉📊📋📌📍📎📏📐📑📒📓📔📕📙📚📛📜📞📟📤📥📦📧📨📪📰📹🔃🔋🔌🔎🔏🔐🔖🔗🔘🔙🔚🔛🔜🔟🔠🔡🔢🔣🔤🔦🔧🔩🔪🔮🔵🔶🔷🔸🔹🔼🔽😄😊😃😉😍😘😚😳😌😁😜😝😒😏😓😔😞😱😠😡😪😷👿👽💛💙💜💗💚💔💓💘🌟💢💤💨💦🎶🎵🔥💩👍👎👌👊👋👐👆👇👉👈🙌🙏👏💪🚶🏃👫💃👯🙆🙅💁🙇💏💑💆💇💅👦👧👩👨👶👵👴👱👲👳👷👮👼👸💂💀👣💋👄👂👀👃⛄🌙🌀🌊🐱🐶🐭🐹🐰🐺🐸🐯🐨🐻🐷🐮🐗🐵🐒🐴🐎🐫🐑🐘🐍🐦🐤🐔🐧🐛🐙🐠🐟🐳🐬💐🌸🌹🌻🌺🍁🍃🍂🌴🌵🌾🐚🎍💝🎎🎒🎓🎏🎆🎇🎐🎑🎃👻🎅🎄🎁🔔🎉🎈💿📀📷🎥💻📺📱📠💽📼🔊📢📣📻📡🔍🔓🔒🔑🔨💡📲📩📫📮🛀🚽💺💰🔱🚬💣🔫💊💉🏈🏀⚽⚾🎾⛳🎱🏊🏄🎿🏆👾🎷🎸👟👡👠👢👕👔👜💄💍💎🍵🍺🍻🍸🍶🍴🍔🍟🍝🍛🍱🍣🍙🍘🍚🍜🍲🍞🍳🍢🍡🍦🍧🎂🍰🍎🍊🍉🍓🍆🍅🏠🏫🏢🏣🏥🏦🏪🏩🏨💒⛪🏬🌇🌆🏯🏰⛺🏭🗼🗻🌄🌅🌃🗽🌈🎡⛲🎢🚢🚤⛵🚀🚲🚙🚗🚕🚌🚓🚒🚑🚚🚃🚉🚄🚅🎫⛽🚥🚧🔰🏧🎰🚏💈🏁🎌🎯🀄🎬📝📖🎨🎤🎧🎺👗👘👙🎀🎩👑👒🌂💼',
  },
  {
    name: 'Classic',
    icon: 'code',
    characters: '⌘«»‹›‘’“”„‚❝❞£¥€$¢¬¶@§®©™°×π±√‰Ω∞≈÷~≠¹²³½¼¾‐–—|⁄\\[]{}†‡…·•●⌥⌃⇧↩¡¿‽⁂∴∵◊※←→↑↓☜☞☝☟✔★☆♺☼☂☺☹☃✉✿✄✈✌✎♠♦♣♥♪♫♯♀♂αßÁáÀàÅåÄäÆæÇçÉéÈèÊêÍíÌìÎîÑñÓóÒòÔôÖöØøÚúÙùÜüŽž',
  },
  {
    name: 'Currency',
    icon: 'attach_money',
    characters: '₳฿￠₡¢₢₵₫€￡£₤₣ƒ₲₭₥₦₱＄$₮₩￦¥￥₴¤₰៛₪₯₠₧₨௹﷼㍐৲৳₹',
  },
  {
    name: 'Numerals',
    icon: 'format_list_numbered',
    characters: '⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛⓪①②③④⑤⑥⑦⑧⑨⑩➀➁➂➃➄➅➆➇➈➉⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⓿❶❷❸❹❺❻❼❽❾❿➊➋➌➍➎➏➐➑➒➓⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇¹²³↉½⅓¼⅕⅙⅐⅛⅑⅒⅔⅖¾⅗⅜⅘⅚⅝⅞',
  },
  {
    name: 'Punctuation',
    icon: 'format_quote',
    characters: '❝❞❛❜‘’‛‚“”„‟«»‹›Ꞌ"<>@×‧¨․꞉:⁚⁝⁞‥…⁖⸪⸬⸫⸭⁛⁘⁙⁏;⦂⁃‐‑‒-–⎯—―_~⁓⸛⸞⸟ⸯ¬/\\⁄|⎜¦‖‗†‡·•⸰°‣⁒%‰‱&⅋§÷+±=꞊′″‴⁗‵‶‷‸*⁑⁎⁕※⁜⁂!‼¡?¿⸮⁇⁉⁈‽⸘¼½¾²³©®™℠℻℅℁⅍℄¶⁋❡⁌⁍⸖⸗⸚⸓()[]{}⸨⸩❨❩❪❫⸦⸧❬❭❮❯❰❱❴❵❲❳⦗⦘⁅⁆〈〉⏜⏝⏞⏟⸡⸠⸢⸣⸤⸥⎡⎤⎣⎦⎨⎬⌠⌡⎛⎠⎝⎞⁀⁔‿⁐‾⎟⎢⎥⎪ꞁ⎮⎧⎫⎩⎭⎰⎱\'',
  },
  {
    name: 'Mathematical',
    icon: 'plus_one',
    characters: '∞⟀⟁⟂⟃⟄⟇⟈⟉⟊⟐⟑⟒⟓⟔⟕⟖⟗⟘⟙⟚⟛⟜⟝⟞⟟⟠⟡⟢⟣⟤⟥⟦⟧⟨⟩⟪⟫⦀⦁⦂⦃⦄⦅⦆⦇⦈⦉⦊⦋⦌⦍⦎⦏⦐⦑⦒⦓⦔⦕⦖⦗⦘⦙⦚⦛⦜⦝⦞⦟⦠⦡⦢⦣⦤⦥⦦⦧⦨⦩⦪⦫⦬⦭⦮⦯⦰⦱⦲⦳⦴⦵⦶⦷⦸⦹⦺⦻⦼⦽⦾⦿⧀⧁⧂⧃⧄⧅⧆⧇⧈⧉⧊⧋⧌⧍⧎⧏⧐⧑⧒⧓⧔⧕⧖⧗⧘⧙⧚⧛⧜⧝⧞⧟⧡⧢⧣⧤⧥⧦⧧⧨⧩⧪⧫⧬⧭⧮⧯⧰⧱⧲⧳⧴⧵⧶⧷⧸⧹⧺⧻⧼⧽⧾⧿∀∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑−∓∔∕∖∗∘∙√∛∜∝∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿✕✖✚',
  },
];

export default class UnicodeCharacterPicker extends Component {
  constructor() {
    super();
    this.state = {
      copiedCharacter: null,
      activeTabIndex: 0,
    };
  }

  render() {
    const characterToComponent = (categoryId, character) => {
      const id = `character-${categoryId}-${character}`;
      return (
        <CopyToClipboard
          key={id}
          text={character}
          onCopy={() => this.onCopy(id)}
        >
          <span
            id={id}
            className={`unicode-characters-character${id === this.state.copiedCharacter ? ' unicode-characters-character--copied' : ''}`}
          >
            {character}
          </span>
        </CopyToClipboard>
      );
    };

    const getCategoryId = name => name.replace(/\s+/, '-').toLowerCase();

    const tabs = charactersMap.map(({ name, icon }) => (
      <Tab key={`tab-${getCategoryId(name)}`}>
        <TabIcon>
          {icon}
        </TabIcon>
        <TabIconText>
          {name}
        </TabIconText>
      </Tab>
    ));

    const activeCategory = charactersMap[this.state.activeTabIndex];
    const activecategoryId = getCategoryId(activeCategory.name);

    return (
      <div>
        <TabBarScroller className="unicode-characters-tabs">
          <TabBar
            activeTabIndex={this.state.activeTabIndex}
            onChange={evt => this.setState({ activeTabIndex: evt.detail.activeTabIndex })}
          >
            {tabs}
          </TabBar>
        </TabBarScroller>

        <div className="unicode-characters-list">
          {
            Array.from(activeCategory.characters)
              .map(c => characterToComponent(activecategoryId, c))
          }
        </div>
      </div>
    );
  }

  onCopy(id) {
    this.setState({ copiedCharacter: id });
  }
}
