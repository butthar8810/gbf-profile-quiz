const allQuizData = [ //hints[属性, 得意武器, 種族, 性別, タイプ, 奥義名, １アビ, サポアビ, 年齢, 身長]
{answer:'アーサー', hints: {element:'光', type:'バランスタイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'コールブランド', charge:'ケーニヒ・シュヴェールト', ability:'ダンクルハイト・シュナイデン', support:'裁定の剣', age:'14歳', title:'[目覚めし輝剣]'}, image: 'images/chara/アーサー.png', icon: 'images/icon/アーサー.jpg'},
{answer:'アーミラ', hints: {element:'光', type:'特殊タイプ', race:'その他', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'ドラゴンスレイヤー', charge:'インヒューマン・ランペイジ', ability:'バルサゴス', support:'片翼の悪魔', age:'年齢：不詳', title:'[舞い降りし少女]'}, image: 'images/chara/アーミラ.png', icon: 'images/icon/アーミラ.jpg'},
{answer:'アイザック', hints: {element:'水', type:'防御タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'銃', unlock:'プラズマクラック', charge:'ダクティ・エクスカベイション', ability:'サーマルブレード', support:'モーター・ドライブ', age:'31歳', title:'[ダクトなエンジニア]'}, image: 'images/chara/アイザック.png', icon: 'images/icon/アイザック.jpg'},
{answer:'アイル', hints: {element:'土', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'エンシェントバンテージ', charge:'ビート・ザ・ウォール', ability:'ギルティブレイク', support:'闘争の血潮', age:'15歳', title:'[灰白の豹]'}, image: 'images/chara/アイル.png', icon: 'images/icon/アイル.jpg'},
{answer:'アオイドス', hints: {element:'火', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'楽器', unlock:'フライアウェイ', charge:'Heavens On Misery', ability:'Judgment Night', support:'Killing Wing', age:'年齢：不明', title:'[エンド・オブ・ザ]'}, image: 'images/chara/アオイドス.png', icon: 'images/icon/アオイドス.jpg'},
{answer:'アギエルバ', hints: {element:'火', type:'防御タイプ', race:'ドラフ', sex:'男', weapon1:'剣', weapon2:'-', unlock:'雷公刃ユピテル', charge:'撃滅暁天', ability:'剛毅', support:'豪放磊落', age:'34歳', title:'[暁の大刀]'}, image: 'images/chara/アギエルバ.png', icon: 'images/icon/アギエルバ.jpg'},
{answer:'アグロヴァル', hints: {element:'水', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'ゴットフリート', charge:'ジルベーネ・ヴェルト', ability:'ツェアライセン', support:'覇者の風格', age:'32歳', title:'[氷皇]'}, image: 'images/chara/アグロヴァル.png', icon: 'images/icon/アグロヴァル.jpg'},
{answer:'アザゼル', hints: {element:'闇', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'短剣', weapon2:'格闘', unlock:'シャドウサーペント', charge:'スケープゴート', ability:'マーシレスドゥーム', support:'不遜なる翼', age:'年齢：不明', title:'[漆黒のリベリオン]'}, image: 'images/chara/アザゼル.png', icon: 'images/icon/アザゼル.jpg'},
{answer:'アズサ', hints: {element:'風', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'刀', weapon2:'-', unlock:'童子切安綱', charge:'死命', ability:'鉄心', support:'償いの旅路', age:'24歳', title:'[解呪の剣鬼]'}, image: 'images/chara/アズサ.png', icon: 'images/icon/アズサ.jpg'},
{answer:'アダム', hints: {element:'土', type:'防御タイプ', race:'その他', sex:'男', weapon1:'剣', weapon2:'-', unlock:'ゾア・イエシェンナ', charge:'オナー・オブ・エルステ', ability:'インドマタビリティ', support:'宰相の務め', age:'稼働年数の正確な記録無し', title:'[エルステ王国宰相]'}, image: 'images/chara/アダム.png', icon: 'images/icon/アダム.jpg'},
{answer:'アテナ', hints: {element:'火', type:'防御タイプ', race:'星晶獣', sex:'女', weapon1:'槍', weapon2:'-', unlock:'セイクリッドランス', charge:'ミネルヴァ・フィーニス', ability:'神盾アイギス', support:'守護の戦女神', age:'年齢：不明', title:'[守護と防衛の女神]'}, image: 'images/chara/アテナ.png', icon: 'images/icon/アテナ.jpg'},
{answer:'アトゥム', hints: {element:'火', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'杖', weapon2:'-', unlock:'ハーリク・シャーティ', charge:'ナヒーブ・アル＝ジャヒーム', ability:'フェネクス', support:'波打つ蛇炎', age:'年齢：不明', title:'[波濤の炎天]'}, image: 'images/chara/アトゥム.png', icon: 'images/icon/アトゥム.jpg'},
{answer:'アニラ', hints: {element:'火', type:'バランスタイプ', race:'ドラフ', sex:'女', weapon1:'槍', weapon2:'格闘', unlock:'天干地支刀・未之飾', charge:'羊瀾怒濤', ability:'森羅万象', support:'羊神宮の主', age:'18歳', title:'[南南西の守護神]'}, image: 'images/chara/アニラ.png', icon: 'images/icon/アニラ.jpg'},
{answer:'アビー', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'斧', weapon2:'-', unlock:'アックスガール・アックス', charge:'レイジング・アックススラッシュ', ability:'ムンちゃんこっち来て！', support:'ぶった斬る！', age:'14歳', title:'[ムンちゃんと一緒！]'}, image: 'images/chara/アビー.png', icon: 'images/icon/アビー.jpg'},
{answer:'アマテラス', hints: {element:'光', type:'回復タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'日輪鈴', charge:'天照晄輝', ability:'天光炎', support:'日輪の輝き', age:'年齢：不明(見た目は少女)', title:'[天穹に旭]'}, image: 'images/chara/アマテラス.png', icon: 'images/icon/アマテラス.jpg'},
{answer:'アミ', hints: {element:'風', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'無料で入手', charge:'角宿', ability:'空裂く風矢', support:'句芒(こうぼう)を司る者', age:'19歳', title:'[四聖青帝]'}, image: 'images/chara/アミ.png', icon: 'images/icon/アミ.jpg'},
{answer:'アラナン', hints: {element:'火', type:'攻撃タイプ', race:'エルーン', sex:'男', weapon1:'杖', weapon2:'-', unlock:'無料で入手', charge:'メーディウム・ソーレ', ability:'烈日の楽園', support:'太陽の祝福', age:'年齢：不明', title:'[破天荒なる教皇]'}, image: 'images/chara/アラナン.png', icon: 'images/icon/アラナン.jpg'},
{answer:'アリア', hints: {element:'風', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'ダーリィ・ブレイド', charge:'星閉刃・黄昏', ability:'ヴァリアス・フォース', support:'伴侶の務め', age:'28歳', title:'[新たな王と伴に]'}, image: 'images/chara/アリア.png', icon: 'images/icon/アリア.jpg'},
{answer:'アリーザ', hints: {element:'火', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'マグマガントレット', charge:'炎鳴流奥義改め・灼龍炎牙', ability:'重ね陽炎', support:'絶えない闘志', age:'17歳', title:'[灼脚の麗姫]'}, image: 'images/chara/アリーザ.png', icon: 'images/icon/アリーザ.jpg'},
{answer:'アルタイル', hints: {element:'水', type:'バランスタイプ', race:'ヒューマン', sex:'男', weapon1:'杖', weapon2:'-', unlock:'ダーインスレイブ', charge:'ウンターガング・ルーン', ability:'戦術策：方円', support:'戦賢の書', age:'26歳', title:'[銀の軍師]'}, image: 'images/chara/アルタイル.png', icon: 'images/icon/アルタイル.jpg'},
{answer:'アルベール', hints: {element:'光', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'オートクレール', charge:'レヴィン・アナイアレイション', ability:'インパルススラッシュ', support:'レヴィオンセイバー', age:'25歳', title:'[雷迅卿]'}, image: 'images/chara/アルベール.png', icon: 'images/icon/アルベール.jpg'},
{answer:'アルルメイヤ', hints: {element:'土', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ガルガンチュア', charge:'セレネ・ティモリア', ability:'月天', support:'未来幻視', age:'29歳', title:'[神託の妖童]'}, image: 'images/chara/アルルメイヤ.png', icon: 'images/icon/アルルメイヤ.jpg'},
{answer:'アレーティア', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'刀', unlock:'宝剣アンダリス', charge:'白刃無双', ability:'序', support:'剣聖', age:'63歳', title:'[剣の賢者]'}, image: 'images/chara/アレーティア.png', icon: 'images/icon/アレーティア.jpg'},
{answer:'アン', hints: {element:'水', type:'防御タイプ', race:'ヒューマン', sex:'女', weapon1:'槍', weapon2:'杖', unlock:'ダイモーンスパイン', charge:'ディターレントイクシード', ability:'コリジョンスペル', support:'学院の守護姫', age:'17歳', title:'[プリンセスマナリア]'}, image: 'images/chara/アン.png', icon: 'images/icon/アン.jpg'},
{answer:'アンジェ', hints: {element:'水', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'凛雅の花槍', charge:'ペタル・ダンサン', ability:'エピヌ・ド・フルール', support:'華麗なエスコート', age:'16歳', title:'[ル・ブランス・シャルマン]'}, image: 'images/chara/アンジェ.png', icon: 'images/icon/アンジェ.jpg'},
{answer:'アンスリア', hints: {element:'火', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'格闘', weapon2:'楽器', unlock:'インフェルノリークス', charge:'アモーレ・パッシオーネ', ability:'マッドネスダンス', support:'エキサイトステップ', age:'23歳', title:'[紅陽の舞主]'}, image: 'images/chara/アンスリア.png', icon: 'images/icon/アンスリア.jpg'},
{answer:'アンダーソン', hints: {element:'火', type:'防御タイプ', race:'ヒューマン', sex:'男', weapon1:'槍', weapon2:'斧', unlock:'ブレード・オブ・ロイヤリティ', charge:'シュヴァルツ・ヴェルファー', ability:'モルゲンレーテ', support:'剛槍連破', age:'55歳', title:'[高潔と信義の将]'}, image: 'images/chara/アンダーソン.png', icon: 'images/icon/アンダーソン.jpg'},
{answer:'アンチラ', hints: {element:'風', type:'バランスタイプ', race:'エルーン', sex:'女', weapon1:'杖', weapon2:'格闘', unlock:'天干地支刀・申之飾', charge:'千手千猿・猿皇波', ability:'不生不滅', support:'猿神宮の主', age:'10歳', title:'[西南西の守護神]'}, image: 'images/chara/アンチラ.png', icon: 'images/icon/アンチラ.jpg'},
{answer:'アンナ', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'旅立ちの魔箒', charge:'サクセサー・ブレイズ', ability:'ローストII', support:'オレサマニマカセナ！', age:'16歳', title:'[飛躍の魔女]'}, image: 'images/chara/アンナ.png', icon: 'images/icon/アンナ.jpg'},
{answer:'アンリエット', hints: {element:'風', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'楽器', weapon2:'-', unlock:'神授のリラ', charge:'メロディ・アレグリア', ability:'フィランソロピー', support:'神選の奏者', age:'年齢：秘密', title:'[癒奏者]'}, image: 'images/chara/アンリエット.png', icon: 'images/icon/アンリエット.jpg'},
{answer:'イーウィヤ', hints: {element:'風', type:'特殊タイプ', race:'その他', sex:'性別：不詳', weapon1:'格闘', weapon2:'-', unlock:'エッタマク・イオ', charge:'イージー・コラプス', ability:'ェダネダン ェティス', support:'ぼーじゃくぶじん', age:'5歳くらいの猫', title:'[『翠』の化猫]'}, image: 'images/chara/イーウィヤ.png', icon: 'images/icon/イーウィヤ.jpg'},
{answer:'イオ', hints: {element:'光', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ガンバンテイン', charge:'エレメンタル・オーバーリミット', ability:'フラワリーセヴン', support:'クリスタル・ヴェール', age:'11歳', title:'[蒼翠の魔法少女]'}, image: 'images/chara/イオ.png', icon: 'images/icon/イオ.jpg'},
{answer:'イカロス', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'列剣フロガ', charge:'ドレッドフル・スラッシュ', ability:'ドレッド・レイド', support:'俺とデイモスに任せてくれ！', age:'15歳', title:'[魔剣携えし戦士]'}, image: 'images/chara/イカロス.png', icon: 'images/icon/イカロス.jpg'},
{answer:'イシュミール', hints: {element:'水', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'剣', weapon2:'-', unlock:'ナーゲルリング', charge:'マロス・ブラスト', ability:'ニヴルヘイム', support:'白の切っ先', age:'27歳', title:'[氷室の守り人]'}, image: 'images/chara/イシュミール.png', icon: 'images/icon/イシュミール.jpg'},
{answer:'イッパツ', hints: {element:'闇', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'醤箸玉杯', charge:'業油天衝', ability:'ネギマシチャーシューラーメン', support:'ラーメン愛', age:'36歳', title:'[真正麺]'}, image: 'images/chara/イッパツ.png', icon: 'images/icon/イッパツ.jpg'},
{answer:'イルザ', hints: {element:'土', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'銃', weapon2:'弓', unlock:'ガーンディーヴァ', charge:'バースト・イレイザー', ability:'セイクリッド・ヘル', support:'調停の銃ニバス', age:'28歳', title:'[峻厳な鬼教官]'}, image: 'images/chara/イルザ.png', icon: 'images/icon/イルザ.jpg'},
{answer:'イルノート', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'ミスティックブラシ', charge:'キル・ザ・シティ', ability:'バーナーボム', support:'ナイトキング', age:'19歳', title:'[夜ノ王]'}, image: 'images/chara/イルノート.png', icon: 'images/icon/イルノート.jpg'},
{answer:'イングヴェイ', hints: {element:'水', type:'防御タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'銃', unlock:'メテオラ', charge:'レッド・ホット・ガーディアン/フルメタル・キャノン', ability:'オール・カミング', support:'タフガイ', age:'55歳', title:'[伊達と酔狂の伝説]'}, image: 'images/chara/イングヴェイ.png', icon: 'images/icon/イングヴェイ.jpg'},
{answer:'インダラ', hints: {element:'闇', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'刀', unlock:'天干地支剣・巳之飾', charge:'金牙神然', ability:'流刀蛇尾', support:'巳神宮の主', age:'23歳', title:'[南南東の守護神]'}, image: 'images/chara/インダラ.png', icon: 'images/icon/インダラ.jpg'},
{answer:'ヴァイト', hints: {element:'闇', type:'攻撃タイプ', race:'その他', sex:'男', weapon1:'短剣', weapon2:'-', unlock:'ブラッディスカー', charge:'プラウド・ブレイド', ability:'フィアー・オブ・ワンスセルフ', support:'ブラッドセイバー', age:'年齢：不明', title:'[血貴]'}, image: 'images/chara/ヴァイト.png', icon: 'images/icon/ヴァイト.jpg'},
{answer:'ヴァジラ', hints: {element:'水', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'刀', weapon2:'格闘', unlock:'天干地支爪・戌之飾', charge:'犬真爛漫', ability:'大口真神', support:'犬神宮の主', age:'14歳', title:'[西北西の守護神]'}, image: 'images/chara/ヴァジラ.png', icon: 'images/icon/ヴァジラ.jpg'},
{answer:'ヴァルフリート', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'オーダーブリンガー', charge:'閃空刃・碧霄', ability:'ブレイキング・ドーン', support:'ドーンブレイクソード', age:'47歳', title:'[先代碧の騎士]'}, image: 'images/chara/ヴァルフリート.png', icon: 'images/icon/ヴァルフリート.jpg'},
{answer:'ヴァンピィ', hints: {element:'闇', type:'特殊タイプ', race:'その他', sex:'女', weapon1:'杖', weapon2:'短剣', unlock:'アゾット', charge:'ブラッディ・アブソープション', ability:'テスタメント', support:'セルフィッシュ・ロイヤル', age:'年齢：不明', title:'[吸血姫]'}, image: 'images/chara/ヴァンピィ.png', icon: 'images/icon/ヴァンピィ.jpg'},
{answer:'ヴィーラ', hints: {element:'闇', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'ラスト・シン', charge:'アフェクション・アビス', ability:'レイヤーライズII', support:'お姉様お姉様お姉様', age:'22歳', title:'[狂恋の華鎧]'}, image: 'images/chara/ヴィーラ.png', icon: 'images/icon/ヴィーラ.jpg'},
{answer:'ウィル', hints: {element:'闇', type:'回復タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'杖', unlock:'デュアリティソード', charge:'セイント・アウト', ability:'誅罰', support:'魔物を偏愛する者', age:'23歳', title:'[魔的聖職者]'}, image: 'images/chara/ウィル.png', icon: 'images/icon/ウィル.jpg'},
{answer:'ウィルナス', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'性別：不詳', weapon1:'格闘', weapon2:'斧', unlock:'炎威の翼鎌', charge:'マグマチェンバー', ability:'ハドロンスマッシュ', support:'理外の『朱』', age:'20歳前後（ヒト型時）', title:'[六竜の『朱』]'}, image: 'images/chara/ウィルナス.png', icon: 'images/icon/ウィルナス.jpg'},
{answer:'ウーノ', hints: {element:'水', type:'防御タイプ', race:'ハーヴィン', sex:'男', weapon1:'槍', weapon2:'-', unlock:'無料で入手', charge:'真槍破邪顕正陣', ability:'螺旋回鉾', support:'開眼者', age:'年齢：不明', title:'[十天衆]'}, image: 'images/chara/ウーノ.png', icon: 'images/icon/ウーノ.jpg'},
{answer:'ウーフとレニー', hints: {element:'闇', type:'攻撃タイプ', race:'その他', sex:'男/女', weapon1:'格闘', weapon2:'銃', unlock:'マスターキー', charge:'ホロウ・ブラスト', ability:'ハルトアイゼン', support:'ケンプファー', age:'不明/9歳', title:'[人狼と少女]'}, image: 'images/chara/ウーフとレニー.png', icon: 'images/icon/ウーフとレニー.jpg'},
{answer:'ヴェイン', hints: {element:'水', type:'防御タイプ', race:'ヒューマン', sex:'男', weapon1:'槍', weapon2:'斧', unlock:'ブロッサムアクス', charge:'レーヴェバイン・ヤクト', ability:'ヒロイックビート', support:'膝はつかねぇ！', age:'25歳', title:'[不撓不屈の騎士]'}, image: 'images/chara/ヴェイン.png', icon: 'images/icon/ヴェイン.jpg'},
{answer:'ウツセミ', hints: {element:'光', type:'特殊タイプ', race:'ドラフ', sex:'女', weapon1:'楽器', weapon2:'短剣', unlock:'千代紙風車', charge:'夢現抱擁', ability:'花魁道中', support:'夢の案内人', age:'24歳', title:'[極楽の䲴]'}, image: 'images/chara/ウツセミ.png', icon: 'images/icon/ウツセミ.jpg'},
{answer:'ウリエル', hints: {element:'土', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'パイルスマッシュ', charge:'陸動・光炎', ability:'アップヒーバル', support:'オレイカルコス', age:'年齢：不明', title:'[土の天司]'}, image: 'images/chara/ウリエル.png', icon: 'images/icon/ウリエル.jpg'},
{answer:'ウルキ', hints: {element:'水', type:'バランスタイプ', race:'ハーヴィン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'無料で入手', charge:'虚宿', ability:'瞬刻水凍', support:'玄冥(げんめい)を司る者', age:'年齢：ひみつ', title:'[四聖玄帝]'}, image: 'images/chara/ウルキ.png', icon: 'images/icon/ウルキ.jpg'},
{answer:'エイレア', hints: {element:'風', type:'バランスタイプ', race:'エルーン', sex:'女', weapon1:'剣', weapon2:'刀', unlock:'ヴェルゲルミル', charge:'破煌刃・絶禍', ability:'不忠断罪', support:'仁義の刃', age:'29歳', title:'[仁慈の姐御]'}, image: 'images/chara/エイレア.png', icon: 'images/icon/エイレア.jpg'},
{answer:'エウロペ', hints: {element:'水', type:'回復タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'槍', unlock:'ガリレオ・サイト', charge:'トーラス・ブロンテー', ability:'マナ・ブラスト', support:'聖泉の星華', age:'年齢：不明', title:'[麗しき水星の美姫]'}, image: 'images/chara/エウロペ.png', icon: 'images/icon/エウロペ.jpg'},
{answer:'エキドナ', hints: {element:'風', type:'防御タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'楽器', unlock:'慈愛の揺鈴', charge:'トゥ・マザーアース', ability:'ヒーリングララバイ', support:'母を司る星晶獣', age:'年齢：不明', title:'[全ての母]'}, image: 'images/chara/エキドナ.png', icon: 'images/icon/エキドナ.jpg'},
{answer:'エスタリオラ', hints: {element:'風', type:'特殊タイプ', race:'ハーヴィン', sex:'男', weapon1:'杖', weapon2:'-', unlock:'無料で入手', charge:'レアリゼ・レーヴ', ability:'ウインズ・オブ・エタニティ', support:'節制の献身', age:'121歳', title:'[止水の隠者]'}, image: 'images/chara/エスタリオラ.png', icon: 'images/icon/エスタリオラ.jpg'},
{answer:'エッセル', hints: {element:'火', type:'バランスタイプ', race:'エルーン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'無料で入手', charge:'トリオンフォ・デラ・モルテ', ability:'インテンスバレット', support:'魔弾の射手', age:'17歳(自称)', title:'[十天衆]'}, image: 'images/chara/エッセル.png', icon: 'images/icon/エッセル.jpg'},
{answer:'エニュオ', hints: {element:'風', type:'攻撃タイプ', race:'星晶獣', sex:'女', weapon1:'槍', weapon2:'-', unlock:'インサイテッドランス', charge:'ルースレス・タイラント', ability:'エイジャックス', support:'蹂躙の戦女神', age:'年齢：不明', title:'[破壊と蹂躙の獣]'}, image: 'images/chara/エニュオ.png', icon: 'images/icon/エニュオ.jpg'},
{answer:'エミリア', hints: {element:'土', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'白銀の煌槍', charge:'ノーブル・シルバー', ability:'ファイスソード', support:'エルフォース王都騎士団団長', age:'15歳', title:'[廉潔の若き騎士団長]'}, image: 'images/chara/エミリア.png', icon: 'images/icon/エミリア.jpg'},
{answer:'エリカ', hints: {element:'水', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'ハイランドクーガー', charge:'ラモール・パドブーレ', ability:'オード・リュット', support:'ラフィレット・デ・ロアンヌ', age:'20歳', title:'[ラフィーユ・デ・リブラン]'}, image: 'images/chara/エリカ.png', icon: 'images/icon/エリカ.jpg'},
{answer:'エリン', hints: {element:'水', type:'回復タイプ', race:'その他', sex:'女', weapon1:'杖', weapon2:'-', unlock:'氷晶刃', charge:'クリスタル・グラシア', ability:'クリスタルクローク', support:'永久の輝き', age:'15歳', title:'[氷晶の先駆者]'}, image: 'images/chara/エリン.png', icon: 'images/icon/エリン.jpg'},
{answer:'エルモート', hints: {element:'火', type:'攻撃タイプ', race:'エルーン', sex:'男', weapon1:'杖', weapon2:'-', unlock:'アーソン・ブレイズ', charge:'紅蓮炎獄陣', ability:'灼烈', support:'インシネレート', age:'21歳', title:'[燃ゆる報恩の葬送者]'}, image: 'images/chara/エルモート.png', icon: 'images/icon/エルモート.jpg'},
{answer:'オイゲン', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'銃', weapon2:'-', unlock:'エーケイ・フォーエイ', charge:'ディー・バンデ・カノーネ', ability:'デトネイト・エイム', support:'ツングースカ・バタフライ', age:'50歳', title:'[蒼醒の志士]'}, image: 'images/chara/オイゲン.png', icon: 'images/icon/オイゲン.jpg'},
{answer:'オーキス', hints: {element:'闇', type:'特殊タイプ', race:'その他', sex:'女', weapon1:'短剣', weapon2:'格闘', unlock:'パラゾニウム', charge:'リゾブル・ブリンガー', ability:'オーダーマリオネット', support:'オートマタ・ロイド', age:'年齢：???', title:'[人形少女]'}, image: 'images/chara/オーキス.png', icon: 'images/icon/オーキス.jpg'},
{answer:'オクタヴィア', hints: {element:'水', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'刀', weapon2:'銃', unlock:'絡繰刀・雲隠', charge:'緑華刃(りょっかじん)・花宴', ability:'絡繰演繹(からくりえんえき)・澪標', support:'荷電居合機構', age:'2000歳以上', title:'[緑の騎士]'}, image: 'images/chara/オクタヴィア.png', icon: 'images/icon/オクタヴィア.jpg'},
{answer:'オクトー', hints: {element:'土', type:'攻撃タイプ', race:'ドラフ', sex:'男', weapon1:'刀', weapon2:'-', unlock:'無料で入手', charge:'尸祀噛顕鋳', ability:'心解', support:'刀神', age:'年齢：不明', title:'[十天衆]'}, image: 'images/chara/オクトー.png', icon: 'images/icon/オクトー.jpg'},
{answer:'オリヴィエ', hints: {element:'闇', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'剣', weapon2:'-', unlock:'フォールン・ソード', charge:'Ｄ・フォールン・ソード', ability:'シルバーレイク', support:'新世界への渇望', age:'年齢：???', title:'[ダークエンジェル]'}, image: 'images/chara/オリヴィエ.png', icon: 'images/icon/オリヴィエ.jpg'},
{answer:'オロロジャイア', hints: {element:'闇', type:'特殊タイプ', race:'その他', sex:'性別：不詳', weapon1:'斧', weapon2:'杖', unlock:'因果の楔針', charge:'アキエスファルクス', ability:'ミスティカ・オーラム', support:'時と因果の楔', age:'外見年齢は20代半ば/前半', title:'[時竜]'}, image: 'images/chara/オロロジャイア.png', icon: 'images/icon/オロロジャイア.jpg'},
{answer:'ガイゼンボーガ', hints: {element:'光', type:'攻撃タイプ', race:'ドラフ', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'無料で入手', charge:'ハルマステール・ミトライユーズ', ability:'パンツァーファウスト', support:'星の車輪', age:'34歳', title:'[怒涛の戦車]'}, image: 'images/chara/ガイゼンボーガ.png', icon: 'images/icon/ガイゼンボーガ.jpg'},
{answer:'カイム', hints: {element:'土', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'短剣', weapon2:'格闘', unlock:'無料で入手', charge:'ゴールデントワイライト', ability:'ダブルディール', support:'刑死者の奉仕', age:'10歳', title:'[忘却の愚者]'}, image: 'images/chara/カイム.png', icon: 'images/icon/カイム.jpg'},
{answer:'カイン', hints: {element:'土', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'刀', weapon2:'-', unlock:'一期一振', charge:'絶襲・太極陣', ability:'闊達自在の計', support:'イデルバの麒麟児', age:'22歳', title:'[暁旦の臥龍]'}, image: 'images/chara/カイン.png', icon: 'images/icon/カイン.jpg'},
{answer:'ガウェイン', hints: {element:'風', type:'防御タイプ', race:'ヒューマン', sex:'男', weapon1:'斧', weapon2:'槍', unlock:'閃刃の剣斧', charge:'絶閃嵐破', ability:'フラクチャー', support:'無為の封縛', age:'29歳', title:'[矜持の甲冑]'}, image: 'images/chara/ガウェイン.png', icon: 'images/icon/ガウェイン.jpg'},
{answer:'カグヤ', hints: {element:'風', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'迦具夜之扇子', charge:'月下繚乱', ability:'天賜の扇風', support:'月影の君', age:'年齢：不明', title:'[玲瓏の月姫]'}, image: 'images/chara/カグヤ.png', icon: 'images/icon/カグヤ.jpg'},
{answer:'カタリナ', hints: {element:'水', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'ミュルグレス', charge:'アイシクルネイルII', ability:'エンチャントランズ', support:'騎士の正道', age:'24歳', title:'[蒼天の守護騎士]'}, image: 'images/chara/カタリナ.png', icon: 'images/icon/カタリナ.jpg'},
{answer:'カッツェリーラ', hints: {element:'風', type:'防御タイプ', race:'ハーヴィン', sex:'男', weapon1:'楽器', weapon2:'-', unlock:'無料で入手', charge:'ガルゲニア行進曲『栄光と繁栄』', ability:'雌伏の第一楽章', support:'審判の吹奏', age:'26歳', title:'[断罪の皇帝]'}, image: 'images/chara/カッツェリーラ.png', icon: 'images/icon/カッツェリーラ.jpg'},
{answer:'カトル', hints: {element:'水', type:'特殊タイプ', race:'エルーン', sex:'男', weapon1:'短剣', weapon2:'-', unlock:'無料で入手', charge:'モルス・ケルタ', ability:'シュリーヴァトサ', support:'閃耀の双剣', age:'17歳(自称)', title:'[十天衆]'}, image: 'images/chara/カトル.png', icon: 'images/icon/カトル.jpg'},
{answer:'ガブリエル', hints: {element:'水', type:'防御タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'水天の福音', charge:'タイダル・ワード', ability:'ジャッジメント・スフィア', support:'パーゴス', age:'年齢：不明', title:'[水の天司]'}, image: 'images/chara/ガブリエル.png', icon: 'images/icon/ガブリエル.jpg'},
{answer:'カリオストロ', hints: {element:'土', type:'回復タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ウロボロス', charge:'アルス・マグナ', ability:'コラプス', support:'世界で一番可愛いっ☆', age:'年齢：不明', title:'[開闢の錬金術師]'}, image: 'images/chara/カリオストロ.png', icon: 'images/icon/カリオストロ.jpg'},
{answer:'カルメリーナ', hints: {element:'風', type:'特殊タイプ', race:'ドラフ', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'グランテピエ', charge:'アプローズ・レイン', ability:'ウォーフープ', support:'ユニバーサルスター', age:'18歳', title:'[円月の跳姫]'}, image: 'images/chara/カルメリーナ.png', icon: 'images/icon/カルメリーナ.jpg'},
{answer:'ガレヲン', hints: {element:'土', type:'バランスタイプ', race:'その他', sex:'性別：不詳', weapon1:'杖', weapon2:'-', unlock:'巌迫の躯杖', charge:'大地の鼓動', ability:'祝福の接吻', support:'理外の『金』', age:'20代半ば(ヒト型時)', title:'[六竜の『金』]'}, image: 'images/chara/ガレヲン.png', icon: 'images/icon/ガレヲン.jpg'},
{answer:'カロ', hints: {element:'風', type:'バランスタイプ', race:'星晶獣', sex:'男', weapon1:'楽器', weapon2:'-', unlock:'ティアドロップ・マンドリン', charge:'クオーレデラルテ', ability:'マエスタ', support:'芸術を愛する守護者', age:'年齢：不明', title:'[芸術を愛でる者達の隣人]'}, image: 'images/chara/カロ.png', icon: 'images/icon/カロ.jpg'},
{answer:'カンターテ', hints: {element:'風', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'楽器', weapon2:'-', unlock:'メモリアヴィオリーノ', charge:'テンペストーソ・ボウイング', ability:'カプリース', support:'旅する楽器職人', age:'23歳', title:'[声を追い求める職人]'}, image: 'images/chara/カンターテ.png', icon: 'images/icon/カンターテ.jpg'},
{answer:'ガンダゴウザ', hints: {element:'火', type:'攻撃タイプ', race:'ドラフ', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'梵天添甲', charge:'怒髪驚天正拳突き', ability:'灼滅・破天道', support:'古今無双流', age:'72歳', title:'[古今独歩の大拳豪]'}, image: 'images/chara/ガンダゴウザ.png', icon: 'images/icon/ガンダゴウザ.jpg'},
{answer:'キャサリン', hints: {element:'土', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'アルセーヌ', charge:'キス・オブ・デス', ability:'ノクターナル', support:'数多の偽名', age:'22歳', title:'[夜失の桃煙]'}, image: 'images/chara/キャサリン.png', icon: 'images/icon/キャサリン.jpg'},
{answer:'グウィン', hints: {element:'水', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'銃', unlock:'ブルーライトニング', charge:'ルナティック・ライン', ability:'リベレート・マギア', support:'アリアネンサの契約者', age:'15歳', title:'[月と空のあいだで]'}, image: 'images/chara/グウィン.png', icon: 'images/icon/グウィン.jpg'},
{answer:'ククル', hints: {element:'水', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'ホワイトホーク', charge:'プロージットブリッツ', ability:'エクスプロージョンケッグ', support:'ライフリング', age:'18歳', title:'[創意の銃設計士]'}, image: 'images/chara/ククル.png', icon: 'images/icon/ククル.jpg'},
{answer:'クピタン', hints: {element:'水', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'弓', weapon2:'-', unlock:'虹の琴', charge:'七想彩雨', ability:'アスペク・トラジェクト', support:'双魚宮の彩光', age:'17歳', title:'[虹色の純情]'}, image: 'images/chara/クピタン.png', icon: 'images/icon/クピタン.jpg'},
{answer:'クビラ', hints: {element:'光', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'槍', weapon2:'斧', unlock:'天干地支鈴・亥之飾', charge:'雲亥蒼天', ability:'迅雷風烈', support:'亥神宮の主', age:'19歳', title:'[北北西の守護神]'}, image: 'images/chara/クビラ.png', icon: 'images/icon/クビラ.jpg'},
{answer:'クラリス', hints: {element:'火', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'メビウス', charge:'スフィア・エクスティンクション', ability:'ナノアナライズ', support:'烔眼の才女', age:'17歳', title:'[未完の錬金術師]'}, image: 'images/chara/クラリス.png', icon: 'images/icon/クラリス.jpg'},
{answer:'グリームニル', hints: {element:'風', type:'バランスタイプ', race:'星晶獣', sex:'男', weapon1:'槍', weapon2:'杖', unlock:'虚無ノ哭風', charge:'神聖破邪晄', ability:'エターナルストリーム', support:'俺の腕が疼いているんだ', age:'年齢：不明', title:'[踊り狂う暴風]'}, image: 'images/chara/グリームニル.png', icon: 'images/icon/グリームニル.jpg'},
{answer:'クリスティーナ', hints: {element:'風', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'銃', weapon2:'短剣', unlock:'ジュエルリゾートモデル', charge:'エンプレス・アフェクション', ability:'セカンドディール', support:'クイーン・オブ・カジノ', age:'年齢：不明', title:'[博徒の女帝]'}, image: 'images/chara/クリスティーナ.png', icon: 'images/icon/クリスティーナ.jpg'},
{answer:'グレア', hints: {element:'火', type:'攻撃タイプ', race:'その他', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'ドラグクロー', charge:'マッドネスクリーヴ', ability:'マナ・ドラグアグニ', support:'炎術式', age:'17歳', title:'[醒竜姫]'}, image: 'images/chara/グレア.png', icon: 'images/icon/グレア.jpg'},
{answer:'クロエ', hints: {element:'闇', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'キュートアップブラシ', charge:'盛れた日ゎさぃっょ～☆', ability:'マヂァゲ', support:'爆沸き案件', age:'16歳', title:'[さぃっょギャル☆]'}, image: 'images/chara/クロエ.png', icon: 'images/icon/クロエ.jpg'},
{answer:'ケルベロス', hints: {element:'闇', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'ココ＆ミミ', charge:'トリニティ・ディザスター', ability:'アブソープション', support:'三位一体♪', age:'年齢：不明', title:'[冥界の番犬]'}, image: 'images/chara/ケルベロス.png', icon: 'images/icon/ケルベロス.jpg'},
{answer:'コウ', hints: {element:'闇', type:'回復タイプ', race:'エルーン', sex:'男', weapon1:'刀', weapon2:'楽器', unlock:'数珠丸', charge:'檳榔子染', ability:'玖之舞・朱染', support:'玖之王家の継承者', age:'12歳', title:'[千年を語る者]'}, image: 'images/chara/コウ.png', icon: 'images/icon/コウ.jpg'},
{answer:'コク', hints: {element:'闇', type:'特殊タイプ', race:'その他', sex:'性別：不詳', weapon1:'格闘', weapon2:'-', unlock:'無料で入手', charge:'死瑞祥・獲麟', ability:'吉兆之呪', support:'死滅を司る者', age:'年齢：不詳', title:'[死滅の歪獣]'}, image: 'images/chara/コク.png', icon: 'images/icon/コク.jpg'},
{answer:'コスモス', hints: {element:'光', type:'バランスタイプ', race:'星晶獣', sex:'女', weapon1:'銃', weapon2:'剣', unlock:'ディアテシア', charge:'エクリブリウム', ability:'スウィープ・デトネーション', support:'願いの続き', age:'年齢：不明', title:'[調停を手放せし獣]'}, image: 'images/chara/コスモス.png', icon: 'images/icon/コスモス.jpg'},
{answer:'コルル', hints: {element:'闇', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'槍', weapon2:'-', unlock:'宿無し', charge:'ストーン・ブレイク', ability:'カッチカチでごんす！', support:'宿命の槍', age:'11歳', title:'[流転の鋼鉄少女]'}, image: 'images/chara/コルル.png', icon: 'images/icon/コルル.jpg'},
{answer:'コルワ', hints: {element:'風', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ホワイトウイング', charge:'ブランシェ・フィル', ability:'ノワール・エ・ブロン', support:'紡絲', age:'26歳', title:'[絢爛の紡ぎ手]'}, image: 'images/chara/コルワ.png', icon: 'images/icon/コルワ.jpg'},
{answer:'コロッサス', hints: {element:'火', type:'攻撃タイプ', race:'星晶獣', sex:'性別：不詳', weapon1:'剣', weapon2:'斧', unlock:'メタル・デストロイヤー', charge:'フォースグラウンド', ability:'絶閃', support:'炎熱の機甲', age:'年齢：不明', title:'[鋼鉄の巨人]'}, image: 'images/chara/コロッサス.png', icon: 'images/icon/コロッサス.jpg'},
{answer:'コンスタンツィア', hints: {element:'闇', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'エルケーニヒ・アウスヴァイス', charge:'エルヴスクッド', ability:'魔炎', support:'平和を望む魔物の王', age:'20歳', title:'[臆病魔王]'}, image: 'images/chara/コンスタンツィア.png', icon: 'images/icon/コンスタンツィア.jpg'},
{answer:'サテュロス', hints: {element:'火', type:'防御タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'剣', unlock:'スキニス', charge:'フェルトロナン', ability:'アン・トゥールナン', support:'星の踊り子', age:'年齢：不明', title:'[繁絆の琥珀]'}, image: 'images/chara/サテュロス.png', icon: 'images/icon/サテュロス.jpg'},
{answer:'さと', hints: {element:'火', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'短剣', weapon2:'刀', unlock:'術繰の籠手', charge:'千屠勢雨', ability:'火遁・火燐灯', support:'忍ノ里の上忍', age:'18歳', title:'[東国の美忍]'}, image: 'images/chara/さと.png', icon: 'images/icon/さと.jpg'},
{answer:'サビルバラ', hints: {element:'火', type:'攻撃タイプ', race:'ハーヴィン', sex:'男', weapon1:'刀', weapon2:'-', unlock:'蒼桜紅葉丸', charge:'清華転生', ability:'絶妖刃', support:'悲しみと怒りの先に', age:'33歳', title:'[人生の指南役]'}, image: 'images/chara/サビルバラ.png', icon: 'images/icon/サビルバラ.jpg'},
{answer:'サブリナ', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'ラドリスの護剣', charge:'ビヨンド・ザ・サン', ability:'エンラージ・ヴィガー', support:'ラドリスの騎士団長', age:'24歳', title:'[宿命の女剣]'}, image: 'images/chara/サブリナ.png', icon: 'images/icon/サブリナ.jpg'},
{answer:'サラ', hints: {element:'土', type:'防御タイプ', race:'ヒューマン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'砂城の宮樂弦', charge:'テラ・ミセリコルディア', ability:'マテルヌス・マエスティティア', support:'砂神グラフォスの慈愛', age:'9歳', title:'[剋命の巫女]'}, image: 'images/chara/サラ.png', icon: 'images/icon/サラ.jpg'},
{answer:'サラーサ', hints: {element:'土', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'剣', weapon2:'斧', unlock:'無料で入手', charge:'オリジン・ブレイカー/ゼロ・リグレッション', ability:'ヴォーパルレイジ', support:'怪力乱神', age:'年齢：不明', title:'[十天衆]'}, image: 'images/chara/サラーサ.png', icon: 'images/icon/サラーサ.jpg'},
{answer:'サリエル', hints: {element:'闇', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'斧', weapon2:'-', unlock:'エクセキューショナー', charge:'ラクリマ･サングイス', ability:'エクスキューショナーズ・サイス', support:'刑死の執行者', age:'年齢：不明', title:'[虹橋の堕天司]'}, image: 'images/chara/サリエル.png', icon: 'images/icon/サリエル.jpg'},
{answer:'サルナーン', hints: {element:'光', type:'特殊タイプ', race:'エルーン', sex:'男', weapon1:'杖', weapon2:'-', unlock:'封鍵クラウストルム', charge:'エタニティ・デザイア', ability:'ルナティックベール', support:'精霊カザンの加護', age:'22歳', title:'[禁呪の恋人]'}, image: 'images/chara/サルナーン.png', icon: 'images/icon/サルナーン.jpg'},
{answer:'ザルハメリナ', hints: {element:'火', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'リング・オブ・サン', charge:'イルミネイト・オール', ability:'サンライト・レジデューム', support:'太陽信仰', age:'25歳', title:'[日輪の巫女]'}, image: 'images/chara/ザルハメリナ.png', icon: 'images/icon/ザルハメリナ.jpg'},
{answer:'サンダルフォン', hints: {element:'光', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'剣', weapon2:'刀', unlock:'エフェス', charge:'パラダイス・ロスト', ability:'エントラスト・デザイア', support:'約束の十二枚羽', age:'年齢：不明', title:'[荘重たる十二枚羽]'}, image: 'images/chara/サンダルフォン.png', icon: 'images/icon/サンダルフォン.jpg'},
{answer:'サンチラ', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'弓', weapon2:'楽器', unlock:'天干地支弓・午之飾', charge:'金牙神然', ability:'射将先馬', support:'午神宮の主', age:'13＋108歳', title:'[南の守護神]'}, image: 'images/chara/サンチラ.png', icon: 'images/icon/サンチラ.jpg'},
{answer:'サンドリヨン', hints: {element:'闇', type:'攻撃タイプ', race:'その他', sex:'女', weapon1:'短剣', weapon2:'格闘', unlock:'ウルレ・ラム', charge:'ジョリ・フィーユ・アタック', ability:'ヴィザージュ・ジャンベ', support:'全空一のマスコット', age:'生まれたて', title:'[新生マスコット]'}, image: 'images/chara/サンドリヨン.png', icon: 'images/icon/サンドリヨン.jpg'},
{answer:'ジークフリート', hints: {element:'土', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'刀', unlock:'アスカロン', charge:'シュヴァルツ・ファング', ability:'ウーヴェ', support:'邪竜の返り血', age:'32歳', title:'[竜殺しの騎士]'}, image: 'images/chara/ジークフリート.png', icon: 'images/icon/ジークフリート.jpg'},
{answer:'シーザー', hints: {element:'光', type:'バランスタイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'白耀剣', charge:'白鳳刃･天照', ability:'輝煌刃', support:'白の鎧', age:'23歳', title:'[白騎士]'}, image: 'images/chara/シーザー.png', icon: 'images/icon/シーザー.jpg'},
{answer:'シヴァ', hints: {element:'火', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'槍', weapon2:'杖', unlock:'悪滅の雷', charge:'悪滅の雷霆/パーシュパターストラ', ability:'トリシューラ', support:'破滅の舞踏', age:'年齢：不明', title:'[究極不変悪滅善護]'}, image: 'images/chara/シヴァ.png', icon: 'images/icon/シヴァ.jpg'},
{answer:'ジェシカ', hints: {element:'闇', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'アークゥイバス・ラフィネス', charge:'ワンデル・フューアー', ability:'アイゼナリーゲン', support:'イメチェン大作戦！', age:'18歳', title:'[変わりゆく銃士]'}, image: 'images/chara/ジェシカ.png', icon: 'images/icon/ジェシカ.jpg'},
{answer:'シエテ', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'無料で入手', charge:'エスパーダ・ガラクシア', ability:'エンブレーマ', support:'天星剣王', age:'27歳', title:'[十天衆]'}, image: 'images/chara/シエテ.png', icon: 'images/icon/シエテ.jpg'},
{answer:'シェリーネ', hints: {element:'光', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'槍', weapon2:'-', unlock:'ルールクール', charge:'操符槍術・剛通閃', ability:'ピアースブレイク', support:'秘石の衝動', age:'20歳', title:'[紅紫の衝動]'}, image: 'images/chara/シェリーネ.png', icon: 'images/icon/シェリーネ.jpg'},
{answer:'シオン', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'刀', weapon2:'-', unlock:'ボンサイブレード', charge:'夜桜散花', ability:'茶柱繚乱', support:'ボンサイ流', age:'18歳', title:'[サムライビューティ]'}, image: 'images/chara/シオン.png', icon: 'images/icon/シオン.jpg'},
{answer:'シス', hints: {element:'闇', type:'攻撃タイプ', race:'エルーン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'無料で入手', charge:'神髄･鬼面阿修羅', ability:'惡門・羅刹', support:'神狼', age:'19歳', title:'[十天衆]'}, image: 'images/chara/シス.png', icon: 'images/icon/シス.jpg'},
{answer:'シトリ', hints: {element:'光', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'弓', weapon2:'刀', unlock:'アヤの弓', charge:'天雷・星穿', ability:'月雲花風', support:'境界の住人', age:'年齢：不明', title:'[星に贖う少女]'}, image: 'images/chara/シトリ.png', icon: 'images/icon/シトリ.jpg'},
{answer:'ジャスミン', hints: {element:'闇', type:'回復タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ハーバル・バスケット', charge:'ハーバル・リジェネレイト', ability:'カドゥルポーション', support:'無欲の救済', age:'16歳', title:'[仁恵の薬草士]'}, image: 'images/chara/ジャスミン.png', icon: 'images/icon/ジャスミン.jpg'},
{answer:'シャトラ', hints: {element:'風', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'槍', weapon2:'格闘', unlock:'天干地支像・丑之飾', charge:'王丑円満', ability:'舐犢之愛', support:'丑神宮の主', age:'15歳', title:'[北北東の守護神]'}, image: 'images/chara/シャトラ.png', icon: 'images/icon/シャトラ.jpg'},
{answer:'シャノワール', hints: {element:'水', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'杖', weapon2:'短剣', unlock:'ファントムシーフナイフ', charge:'ファンタズミック・ショータイム', ability:'大胆なる予告', support:'怪盗の流儀', age:'年齢：不明', title:'[世紀の大怪盗]'}, image: 'images/chara/シャノワール.png', icon: 'images/icon/シャノワール.jpg'},
{answer:'ジャミル', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'短剣', weapon2:'-', unlock:'ウルジュワーニー', charge:'ｉｄａｒｘｉａ', ability:'エクスクルージョン', support:'ウルジュワンの暗殺術', age:'15歳', title:'[紫影の懐刀]'}, image: 'images/chara/ジャミル.png', icon: 'images/icon/ジャミル.jpg'},
{answer:'シャルロッテ', hints: {element:'水', type:'バランスタイプ', race:'ハーヴィン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'輝剣クラウ・ソラス', charge:'ノーブル・エクスキューション', ability:'ブルームーン', support:'リュミエール聖騎士団団長', age:'24歳', title:'[小さな聖騎士]'}, image: 'images/chara/シャルロッテ.png', icon: 'images/icon/シャルロッテ.jpg'},
{answer:'ジャンヌダルク', hints: {element:'光', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'槍', unlock:'カラドボルグ', charge:'神槍マルテ', ability:'リヴァーサル', support:'ラ・ピュセル', age:'19歳', title:'[聖乙女]'}, image: 'images/chara/ジャンヌダルク.png', icon: 'images/icon/ジャンヌダルク.jpg'},
{answer:'シュクラ', hints: {element:'水', type:'バランスタイプ', race:'エルーン', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'新神気鋭・猫之印', charge:'現猫打破', ability:'残影抜刀', support:'背負うは猫神の名', age:'16歳', title:'[猫神]'}, image: 'images/chara/シュクラ.png', icon: 'images/icon/シュクラ.jpg'},
{answer:'シュシュク', hints: {element:'土', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'無料で入手', charge:'觜宿', ability:'金刺吸気', support:'蓐収(じょくしゅう)を司る者', age:'18歳', title:'[四聖白帝]'}, image: 'images/chara/シュシュク.png', icon: 'images/icon/シュシュク.jpg'},
{answer:'シュラ', hints: {element:'水', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'槍', weapon2:'-', unlock:'テイウァッツ', charge:'蒼華嵐刃', ability:'戦術策：典宝', support:'征道の書', age:'25歳', title:'[希求の軍師]'}, image: 'images/chara/シュラ.png', icon: 'images/icon/シュラ.jpg'},
{answer:'ジュリエット', hints: {element:'光', type:'防御タイプ', race:'ヒューマン', sex:'女', weapon1:'槍', weapon2:'-', unlock:'キャピュレティオウス', charge:'サルヴァツィオーネ・ルーチェ', ability:'フルミネ・ビアンコ', support:'ヴェローナの守護精霊', age:'20歳', title:'[聖王女]'}, image: 'images/chara/ジュリエット.png', icon: 'images/icon/ジュリエット.jpg'},
{answer:'ジョイ', hints: {element:'風', type:'特殊タイプ', race:'その他', sex:'性別：不詳', weapon1:'格闘', weapon2:'弓', unlock:'無料で入手', charge:'幸新射矢', ability:'ハマ・ストライク', support:'年越しボディＭｋ-II', age:'1歳', title:'[純真なる釣鐘]'}, image: 'images/chara/ジョイ.png', icon: 'images/icon/ジョイ.jpg'},
{answer:'ショウ', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'宿命鉄拳', charge:'宇威燐・夜想曲', ability:'Full Throttle', support:'"宿命夜想曲"の疾風り', age:'16歳', title:'[Reborn King]'}, image: 'images/chara/ショウ.png', icon: 'images/icon/ショウ.jpg'},
{answer:'ジョエル', hints: {element:'水', type:'回復タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'短剣', unlock:'ラグーンエッジ', charge:'ハイドロ・スピン', ability:'ウォーターヒールII', support:'海原の護り手', age:'19歳', title:'[晩夏の夕凪]'}, image: 'images/chara/ジョエル.png', icon: 'images/icon/ジョエル.jpg'},
{answer:'シルヴァ', hints: {element:'水', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'ヴリスラグナ', charge:'バリー・ブリット', ability:'イーグルアイ', support:'静かな威圧', age:'27歳', title:'[奮励の儁秀]'}, image: 'images/chara/シルヴァ.png', icon: 'images/icon/シルヴァ.jpg'},
{answer:'シルヴィア', hints: {element:'水', type:'バランスタイプ', race:'星晶獣', sex:'女', weapon1:'剣', weapon2:'-', unlock:'断罪の黎刃', charge:'Ｄ・オブリタレイト', ability:'エッジ・オブ・エンフォーサー', support:'堕天司の監視者', age:'年齢：不明', title:'[断罪の天司]'}, image: 'images/chara/シルヴィア.png', icon: 'images/icon/シルヴィア.jpg'},
{answer:'シルフ', hints: {element:'火', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ラ・シルフィード', charge:'ファルター・タンツ', ability:'デア・アルカヌム', support:'「愛」を探して', age:'年齢：不明', title:'[愛を追う蝶翅]'}, image: 'images/chara/シルフ.png', icon: 'images/icon/シルフ.jpg'},
{answer:'シロウ', hints: {element:'闇', type:'防御タイプ', race:'ヒューマン', sex:'男', weapon1:'刀', weapon2:'-', unlock:'ギガントスライサー', charge:'壊刃・無限断空波', ability:'バイオブレード', support:'悪を斬る壊刃', age:'20代前半', title:'[不屈の心を持つ鋼の戦士]'}, image: 'images/chara/シロウ.png', icon: 'images/icon/シロウ.jpg'},
{answer:'ジン', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'刀', weapon2:'-', unlock:'相州正宗', charge:'蹊照天刀', ability:'硬骨漢', support:'武辺者', age:'32歳', title:'[成願の武士]'}, image: 'images/chara/ジン.png', icon: 'images/icon/ジン.jpg'},
{answer:'シンダラ', hints: {element:'土', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'斧', weapon2:'格闘', unlock:'天干地支爪・寅之飾', charge:'威風寅寅', ability:'悪運散虎', support:'寅神宮の主', age:'12歳', title:'[東北東の守護神]'}, image: 'images/chara/シンダラ.png', icon: 'images/icon/シンダラ.jpg'},
{answer:'スイ', hints: {element:'光', type:'回復タイプ', race:'その他', sex:'女', weapon1:'格闘', weapon2:'楽器', unlock:'揺光', charge:'経典漆翠経', ability:'響弦千重波紋', support:'愛する父の形見', age:'年齢：不明', title:'[琵琶語りの愛娘]'}, image: 'images/chara/スイ.png', icon: 'images/icon/スイ.jpg'},
{answer:'スーテラ', hints: {element:'風', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'弓', weapon2:'-', unlock:'オーロラボウ', charge:'貫穿颶風', ability:'風武射', support:'魔導弓の後継者', age:'21歳', title:'[颯爽の射手]'}, image: 'images/chara/スーテラ.png', icon: 'images/icon/スーテラ.jpg'},
{answer:'スカーサハ', hints: {element:'風', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'ディアドリッククロー', charge:'リアタルマ', ability:'ディアドラの加護', support:'真龍の鉤爪', age:'覇空戦争時代から生きている', title:'[護国真龍]'}, image: 'images/chara/スカーサハ.png', icon: 'images/icon/スカーサハ.jpg'},
{answer:'スクルド', hints: {element:'風', type:'攻撃タイプ', race:'その他', sex:'女', weapon1:'弓', weapon2:'剣', unlock:'戦弓アウスヴァール', charge:'ミリアルデ・ブリッツ', ability:'ツァーロス・ファイレ', support:'誇り高き戦乙女', age:'享年25歳', title:'[ひたむきなる戦乙女]'}, image: 'images/chara/スクルド.png', icon: 'images/icon/スクルド.jpg'},
{answer:'スツルム', hints: {element:'火', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'剣', weapon2:'刀', unlock:'イクサバ', charge:'フロム・ヘル', ability:'レックレスレイド', support:'力圧の刃/技錬の刃', age:'年齢：不明', title:'[戦焔の傭兵]'}, image: 'images/chara/スツルム.png', icon: 'images/icon/スツルム.jpg'},
{answer:'スピナー', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'短剣', weapon2:'-', unlock:'スピンブレード・V2', charge:'ジャイレーション・ファンタジア', ability:'スピンナウェイク', support:'無限大の可能性', age:'20歳', title:'[回転名人]'}, image: 'images/chara/スピナー.png', icon: 'images/icon/スピナー.jpg'},
{answer:'ゼタ', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'槍', weapon2:'-', unlock:'ブリューナク', charge:'シリウスロア', ability:'アルベスの槍', support:'アルベスの契約者', age:'21歳', title:'[真紅の穿光]'}, image: 'images/chara/ゼタ.png', icon: 'images/icon/ゼタ.jpg'},
{answer:'ゼヘク', hints: {element:'闇', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'短剣', weapon2:'格闘', unlock:'ミミングバゼラード', charge:'ヴァリアントエッジ', ability:'封魔ノ凶ツ刃', support:'侵食する魔力', age:'18歳', title:'[異形を携えし者]'}, image: 'images/chara/ゼヘク.png', icon: 'images/icon/ゼヘク.jpg'},
{answer:'セルエル', hints: {element:'光', type:'攻撃タイプ', race:'エルーン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'フロッティ', charge:'レッドブランチ・サイクル', ability:'コートリーブレイド', support:'アイルスト王国第一王子', age:'25歳', title:'[亡国の血脈]'}, image: 'images/chara/セルエル.png', icon: 'images/icon/セルエル.jpg'},
{answer:'セレフィラ', hints: {element:'風', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'楽器', weapon2:'-', unlock:'キタラアングリカ', charge:'レヴール・シンフォニア', ability:'ディミヌエンド', support:'赤誠の提琴', age:'17歳', title:'[望夢の奏者]'}, image: 'images/chara/セレフィラ.png', icon: 'images/icon/セレフィラ.jpg'},
{answer:'セワスチアン', hints: {element:'闇', type:'攻撃タイプ', race:'エルーン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'オートルフォワ・エペ', charge:'ルージュ・テンペート', ability:'ルーヴ・アボワイエ', support:'老境の折剣', age:'68歳', title:'[暗影の忠剣]'}, image: 'images/chara/セワスチアン.png', icon: 'images/icon/セワスチアン.jpg'},
{answer:'セン', hints: {element:'風', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'ギャラクティカインパクト', charge:'猫猫ハリケーンスラッシュ', ability:'嵐爪', support:'爪烈の型/跳翔の型', age:'16歳', title:'[藹々の猫娘]'}, image: 'images/chara/セン.png', icon: 'images/icon/セン.jpg'},
{answer:'ゾーイ', hints: {element:'光', type:'バランスタイプ', race:'星晶獣', sex:'女', weapon1:'銃', weapon2:'剣', unlock:'フェイトルーラー', charge:'コズミック・レイ', ability:'コンバージェンス', support:'調停の涙', age:'年齢：不明', title:'[覚醒の調停者]'}, image: 'images/chara/ゾーイ.png', icon: 'images/icon/ゾーイ.jpg'},
{answer:'ソーン', hints: {element:'光', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'弓', weapon2:'-', unlock:'無料で入手', charge:'ステラ・ターミネイション', ability:'マーキュライト', support:'魔眼の狩人', age:'22歳', title:'[十天衆]'}, image: 'images/chara/ソーン.png', icon: 'images/icon/ソーン.jpg'},
{answer:'ソシエ', hints: {element:'水', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'格闘', weapon2:'楽器', unlock:'緋舞扇', charge:'白之舞・鵬淨', ability:'壱之舞・神楽', support:'失われた王家の末裔', age:'19歳', title:'[千年を継ぎし者]'}, image: 'images/chara/ソシエ.png', icon: 'images/icon/ソシエ.jpg'},
{answer:'ソフィア', hints: {element:'光', type:'回復タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'オーシャンハープ', charge:'レーベン・シュトラール', ability:'ハイルミッテル', support:'ゼエン教僧侶', age:'19歳', title:'[星跡の巡礼者]'}, image: 'images/chara/ソフィア.png', icon: 'images/icon/ソフィア.jpg'},
{answer:'ソリッズ', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'龍虎双滅拳', charge:'拳褌軼敵・岩砕衝', ability:'不撓不屈', support:'老當益壮', age:'70歳', title:'[岩砕快拳]'}, image: 'images/chara/ソリッズ.png', icon: 'images/icon/ソリッズ.jpg'},
{answer:'ターニャ', hints: {element:'闇', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'ガンドリン', charge:'レイヴン・シャドウ', ability:'トキシックネイルズ', support:'月光の如き銀髪', age:'21歳', title:'[千夜を越えし暗闘者]'}, image: 'images/chara/ターニャ.png', icon: 'images/icon/ターニャ.jpg'},
{answer:'ダーント', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'杖', weapon2:'格闘', unlock:'ネコパンチ・プロ', charge:'カプリシュ・アバランチェ', ability:'アイディール', support:'アイ・オブ・ザ・キャット', age:'38歳', title:'[ねこと一緒]'}, image: 'images/chara/ダーント.png', icon: 'images/icon/ダーント.jpg'},
{answer:'タヴィーナ', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'弓', weapon2:'斧', unlock:'手斧', charge:'ラクサト・ルハビ', ability:'イスタアッダ', support:'熱砂の狩人', age:'20歳', title:'[純情なる令嬢]'}, image: 'images/chara/タヴィーナ.png', icon: 'images/icon/タヴィーナ.jpg'},
{answer:'ダヌア', hints: {element:'闇', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'短剣', weapon2:'斧', unlock:'操制の魔刃', charge:'マリオネット・レクイエム', ability:'プレシャス・ドール', support:'オーバー・ザ・フィアー', age:'17歳', title:'[運命を手繰る傀儡師]'}, image: 'images/chara/ダヌア.png', icon: 'images/icon/ダヌア.jpg'},
{answer:'ダリダラ', hints: {element:'水', type:'防御タイプ', race:'ハーヴィン', sex:'男', weapon1:'斧', weapon2:'-', unlock:'無料で入手', charge:'マッシヴ・レイン', ability:'ロバスト・ポテンシャル', support:'小さき大男', age:'22歳', title:'[小さな巨人]'}, image: 'images/chara/ダリダラ.png', icon: 'images/icon/ダリダラ.jpg'},
{answer:'チチリ', hints: {element:'火', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'斧', weapon2:'-', unlock:'無料で入手', charge:'翼宿', ability:'正鵠衝', support:'祝融(しゅくゆう)を司る者', age:'17歳', title:'[四聖朱帝]'}, image: 'images/chara/チチリ.png', icon: 'images/icon/チチリ.jpg'},
{answer:'ツクヨミ', hints: {element:'闇', type:'回復タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'夜見之門', charge:'月華落晄', ability:'宵の訪れ', support:'輝ける光に想いを馳せて', age:'年齢：不明', title:'[宵闇に月]'}, image: 'images/chara/ツクヨミ.png', icon: 'images/icon/ツクヨミ.jpg'},
{answer:'ツバサ', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'ツーバイフォー', charge:'烈弩緋威斗・紅羅狩', ability:'タイマンの"瞬間"', support:'"烈弩宇威愚"の疾風り', age:'16歳', title:'[マナリアの特攻総長]'}, image: 'images/chara/ツバサ.png', icon: 'images/icon/ツバサ.jpg'},
{answer:'ティアマト', hints: {element:'風', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'格闘', weapon2:'杖', unlock:'ティアマトボルト・オリジン', charge:'乱壊のテンペスト', ability:'豊穣の風', support:'風の守護者', age:'年齢：不明', title:'[ガーディアン・オブ・ザ・ウィンド]'}, image: 'images/chara/ティアマト.png', icon: 'images/icon/ティアマト.jpg'},
{answer:'ディアンサ', hints: {element:'土', type:'回復タイプ', race:'ヒューマン', sex:'女', weapon1:'楽器', weapon2:'-', unlock:'ブランドニューメロディ', charge:'Bloomin Five Flowers', ability:'スタンドプレイII', support:'舞い歌う五花', age:'16歳', title:'[舞い歌う五花]'}, image: 'images/chara/ディアンサ.png', icon: 'images/icon/ディアンサ.jpg'},
{answer:'ティコ', hints: {element:'光', type:'回復タイプ', race:'エルーン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ランセット', charge:'オペラチオーネ・プルガトリオ', ability:'アネステジア', support:'魂を繋ぐ魔杖', age:'19歳', title:'[魔法外科医]'}, image: 'images/chara/ティコ.png', icon: 'images/icon/ティコ.jpg'},
{answer:'ティラ', hints: {element:'闇', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'ザ・ダイナソー', charge:'絶滅必須最強恐竜乱舞', ability:'ロアー・オブ・ティラノ', support:'猛竜注意', age:'???歳(子供じゃねーよー！！)', title:'[お騒がせのティラ娘]'}, image: 'images/chara/ティラ.png', icon: 'images/icon/ティラ.jpg'},
{answer:'テフヌト', hints: {element:'水', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ダルドゥール', charge:'レオントポリス', ability:'サイフ・テフェン', support:'トゥスバハ・アラ・ヘイル', age:'年齢：不明', title:'[消夏の麗人]'}, image: 'images/chara/テフヌト.png', icon: 'images/icon/テフヌト.jpg'},
{answer:'デリフォード', hints: {element:'水', type:'防御タイプ', race:'ヒューマン', sex:'男', weapon1:'槍', weapon2:'-', unlock:'ペネトレイトインパルス', charge:'ダウンフォール・ストライク', ability:'シールドショック', support:'王国軍槍術指南役', age:'37歳', title:'[エルステ王国軍槍術指南役]'}, image: 'images/chara/デリフォード.png', icon: 'images/icon/デリフォード.jpg'},
{answer:'テレーズ', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'タンザナイト・デュエラム', charge:'メイルストロームブレイズ', ability:'アイソレーションレイズ', support:'カーツ・オープン', age:'17歳', title:'[逆襲の決闘者]'}, image: 'images/chara/テレーズ.png', icon: 'images/icon/テレーズ.jpg'},
{answer:'ドランク', hints: {element:'水', type:'特殊タイプ', race:'エルーン', sex:'男', weapon1:'杖', weapon2:'-', unlock:'ブルースフィア', charge:'レジェンダリー・スフィア', ability:'フェアトリックレイド', support:'策謀(さくぼう)の閃き', age:'年齢：不明', title:'[深藍の遊兵]'}, image: 'images/chara/ドランク.png', icon: 'images/icon/ドランク.jpg'},
{answer:'トルー', hints: {element:'水', type:'特殊タイプ', race:'エルーン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'レヴェイエ', charge:'コント・ド・メモワール', ability:'スヴニール', support:'英雄幻視', age:'17歳(推定)', title:'[亡失の幻使い]'}, image: 'images/chara/トルー.png', icon: 'images/icon/トルー.jpg'},
{answer:'ドロッセル', hints: {element:'光', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'リトルヴァーミリオン', charge:'Lady Set Go', ability:'お茶会の準備ですの！', support:'倶楽部への招待', age:'12歳', title:'[目指せ百人前レディ]'}, image: 'images/chara/ドロッセル.png', icon: 'images/icon/ドロッセル.jpg'},
{answer:'ナーヴェ', hints: {element:'光', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'楽器', weapon2:'-', unlock:'アッズーロ・コルダ', charge:'アイネ・ロイヒテント・メロディ', ability:'ハルモニー・シュピーレン', support:'流麗なる協奏曲', age:'25歳', title:'[矜恃秘める旋律]'}, image: 'images/chara/ナーヴェ.png', icon: 'images/icon/ナーヴェ.jpg'},
{answer:'ナタク', hints: {element:'風', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'槍', weapon2:'-', unlock:'火尖鎗', charge:'火尖鎗', ability:'炎閃嵐鎗', support:'覇空の武神', age:'年齢：不明', title:'[冀求の武神]'}, image: 'images/chara/ナタク.png', icon: 'images/icon/ナタク.jpg'},
{answer:'ナルメア', hints: {element:'闇', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'刀', weapon2:'-', unlock:'丙子椒林剣', charge:'胡蝶刃改・源氏舞/胡蝶刃改・神楽舞', ability:'胡蝶刃', support:'質実剛健', age:'24歳', title:'[揺らぎの斬姫]'}, image: 'images/chara/ナルメア.png', icon: 'images/icon/ナルメア.jpg'},
{answer:'ニーア', hints: {element:'闇', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'斧', weapon2:'短剣', unlock:'無料で入手', charge:'オムニア・アナイアレイト', ability:'死ト愛ノ世界', support:'死の抱擁', age:'17歳', title:'[嘆きの恋人]'}, image: 'images/chara/ニーア.png', icon: 'images/icon/ニーア.jpg'},
{answer:'ニオ', hints: {element:'風', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'楽器', weapon2:'-', unlock:'無料で入手', charge:'ファーノナス・フリド', ability:'ニンアナンナ', support:'繊細の魔奏者', age:'20歳', title:'[十天衆]'}, image: 'images/chara/ニオ.png', icon: 'images/icon/ニオ.jpg'},
{answer:'ネクタル', hints: {element:'風', type:'攻撃タイプ', race:'その他', sex:'男', weapon1:'刀', weapon2:'弓', unlock:'雷上動', charge:'祓掛矢(はらいかけや)天箭', ability:'鬼断ち', support:'シンシャの祈り', age:'年齢：???', title:'[廻天連理]'}, image: 'images/chara/ネクタル.png', icon: 'images/icon/ネクタル.jpg'},
{answer:'ネツァワルピリ', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'槍', weapon2:'-', unlock:'ピラム', charge:'ソル・ルプトゥラ', ability:'覇装の構え', support:'翼の王者', age:'34歳', title:'[夜明けの鷲王]'}, image: 'images/chara/ネツァワルピリ.png', icon: 'images/icon/ネツァワルピリ.jpg'},
{answer:'ネハン', hints: {element:'光', type:'特殊タイプ', race:'エルーン', sex:'男', weapon1:'銃', weapon2:'格闘', unlock:'リンネ', charge:'漂煆淬炙', ability:'灰身滅智', support:'例えば朝目覚めたら', age:'21歳', title:'[継技縁生]'}, image: 'images/chara/ネハン.png', icon: 'images/icon/ネハン.jpg'},
{answer:'ネモネ', hints: {element:'土', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'斧', weapon2:'槍', unlock:'ブラビューラ', charge:'ガイア・スィーモース', ability:'ラニーニャ', support:'ばっちこーい！', age:'17歳', title:'[揺雲の如く]'}, image: 'images/chara/ネモネ.png', icon: 'images/icon/ネモネ.jpg'},
{answer:'ノア', hints: {element:'光', type:'特殊タイプ', race:'星晶獣', sex:'男', weapon1:'杖', weapon2:'銃', unlock:'アーク', charge:'セイクリッド・グローブ', ability:'ラジェーションボルトII', support:'艇造りの星晶獣', age:'年齢：不明', title:'[空艇の導き手]'}, image: 'images/chara/ノア.png', icon: 'images/icon/ノア.jpg'},
{answer:'ノイシュ', hints: {element:'風', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'弓', weapon2:'短剣', unlock:'天の鹿児弓', charge:'ボアバースティ', ability:'カヴァレリスト', support:'真龍の友愛', age:'26歳', title:'[伽羅弓騎士]'}, image: 'images/chara/ノイシュ.png', icon: 'images/icon/ノイシュ.jpg'},
{answer:'ノワール', hints: {element:'風', type:'攻撃タイプ', race:'星晶獣', sex:'女', weapon1:'剣', weapon2:'-', unlock:'アンダン・ポーラーセクター', charge:'ポーラー・オブスキュラ', ability:'ディプラヴィティエッジ', support:'喪失の堕天司', age:'年齢：不明', title:'[歪天の黒極]'}, image: 'images/chara/ノワール.png', icon: 'images/icon/ノワール.jpg'},
{answer:'パーシヴァル', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'ローエングリン', charge:'ローエン・ヴォルフ', ability:'ツェアライセン', support:'王者の風格', age:'27歳', title:'[炎帝]'}, image: 'images/chara/パーシヴァル.png', icon: 'images/icon/パーシヴァル.jpg'},
{answer:'ハーゼリーラ', hints: {element:'水', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'杖', weapon2:'格闘', unlock:'無料で入手', charge:'イルジオン・フォルモーント', ability:'ボアズ', support:'月の映鏡', age:'22歳', title:'[欺瞞の女教皇]'}, image: 'images/chara/ハーゼリーラ.png', icon: 'images/icon/ハーゼリーラ.jpg'},
{answer:'バアル', hints: {element:'土', type:'バランスタイプ', race:'星晶獣', sex:'男', weapon1:'楽器', weapon2:'斧', unlock:'マイムールクローズ', charge:'ラウダー・レゾナンス', ability:'アダドの境界', support:'共鳴増幅', age:'年齢：不明', title:'[レゾナンス・オブ・ザ]'}, image: 'images/chara/バアル.png', icon: 'images/icon/バアル.jpg'},
{answer:'ハールート・マールート', hints: {element:'闇', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'永遠の落款', charge:'エターナル・ペイン', ability:'ハルワタート', support:'指教の双子', age:'年齢：不明', title:'[天司の郵便屋さん]'}, image: 'images/chara/ハールート・マールート.png', icon: 'images/icon/ハールート・マールート.jpg'},
{answer:'バイヴカハ', hints: {element:'風', type:'攻撃タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'三相女神', charge:'トライアド・ウィング', ability:'トゥアハ・デ・ダナーン', support:'栄光と死の螺旋', age:'年齢：不明', title:'[三相一体の女神]'}, image: 'images/chara/バイヴカハ.png', icon: 'images/icon/バイヴカハ.jpg'},
{answer:'バイシュラ', hints: {element:'土', type:'回復タイプ', race:'エルーン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'医王善杖', charge:'薬師瑠璃光法雨', ability:'百年瑠璃光', support:'薬師の座', age:'……ｻｼﾞｭﾀﾞｺﾊ（37歳）', title:'[薬師の座]'}, image: 'images/chara/バイシュラ.png', icon: 'images/icon/バイシュラ.jpg'},
{answer:'ハイラ', hints: {element:'水', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'杖', weapon2:'-', unlock:'天干地支扇・辰之飾', charge:'金牙神然', ability:'臥竜鳳雛', support:'辰神宮の主', age:'25歳', title:'[東南東の守護神]'}, image: 'images/chara/ハイラ.png', icon: 'images/icon/ハイラ.jpg'},
{answer:'バウタオーダ', hints: {element:'光', type:'防御タイプ', race:'ドラフ', sex:'男', weapon1:'剣', weapon2:'-', unlock:'フェアネスマーク', charge:'ヘブンズ・リトリビューション', ability:'ヴァリアントシールド', support:'聖盾', age:'30歳', title:'[正義の聖騎士]'}, image: 'images/chara/バウタオーダ.png', icon: 'images/icon/バウタオーダ.jpg'},
{answer:'ハウヘト', hints: {element:'火', type:'特殊タイプ', race:'その他', sex:'女', weapon1:'杖', weapon2:'-', unlock:'セィワール・ラハブ', charge:'ジャヒーム・アンカー', ability:'ラハブアン・ニハーヤ', support:'零れ落ちし太陽', age:'約30億歳', title:'[不死鳥のもうひとつの欠片]'}, image: 'images/chara/ハウヘト.png', icon: 'images/icon/ハウヘト.jpg'},
{answer:'バサラ', hints: {element:'光', type:'攻撃タイプ', race:'エルーン', sex:'男', weapon1:'刀', weapon2:'格闘', unlock:'天干地支刀・戌之威', charge:'伐折羅千斬', ability:'犬焔万丈', support:'星を砕き、星を滅す', age:'年齢：不明', title:'[初代闘神]'}, image: 'images/chara/バサラ.png', icon: 'images/icon/バサラ.jpg'},
{answer:'バザラガ', hints: {element:'闇', type:'攻撃タイプ', race:'ドラフ', sex:'男', weapon1:'斧', weapon2:'-', unlock:'ミストルテイン', charge:'カルネイジ・ムーン', ability:'大鎌グロウノス', support:'グロウノスの契約者', age:'30歳', title:'[冥闇の剛刃]'}, image: 'images/chara/バザラガ.png', icon: 'images/icon/バザラガ.jpg'},
{answer:'パラシュラーマ', hints: {element:'火', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'弓', weapon2:'斧', unlock:'ヴィジャヤ', charge:'ブラフマーストラ', ability:'アグニヴリシュティ', support:'悪滅の求道者', age:'年齢：不明（外見年齢26歳）', title:'[遏悪守護聖仙]'}, image: 'images/chara/パラシュラーマ.png', icon: 'images/icon/パラシュラーマ.jpg'},
{answer:'パリス', hints: {element:'土', type:'防御タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'ディニタドゥーカ', charge:'カンツォーネ・デル・アルバ', ability:'パラーレ・プロテッジ', support:'公爵の矜持', age:'28歳', title:'[刮眼の公爵]'}, image: 'images/chara/パリス.png', icon: 'images/icon/パリス.jpg'},
{answer:'ハレゼナ', hints: {element:'土', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'斧', weapon2:'-', unlock:'ソウルイーター', charge:'ベリベリナイ・ディスアセンブリ', ability:'あたらねーッ！！', support:'サイコーにクレ〜ジ〜！', age:'19歳', title:'[壊天災]'}, image: 'images/chara/ハレゼナ.png', icon: 'images/icon/ハレゼナ.jpg'},
{answer:'ピィジウ', hints: {element:'光', type:'回復タイプ', race:'その他', sex:'性別：不詳', weapon1:'刀', weapon2:'槍', unlock:'無料で入手', charge:'禁忌緘酒', ability:'神雷・空裂衝', support:'生誕を司る者', age:'年齢：不明', title:'[生誕の忌獣]'}, image: 'images/chara/ピィジウ.png', icon: 'images/icon/ピィジウ.jpg'},
{answer:'ビカラ', hints: {element:'闇', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'斧', weapon2:'格闘', unlock:'天干地支筒・子之飾', charge:'百子夜行', ability:'グリーティング・ドーマウス', support:'鼠神宮の主', age:'14歳', title:'[北の守護神]'}, image: 'images/chara/ビカラ.png', icon: 'images/icon/ビカラ.jpg'},
{answer:'ファスティバ', hints: {element:'土', type:'攻撃タイプ', race:'ドラフ', sex:'性別：不詳', weapon1:'格闘', weapon2:'-', unlock:'レインボーハンド', charge:'ラヴ・サーブ・ボンバー', ability:'ラヴ・グラッピング', support:'熱き攻防', age:'34歳', title:'[愛の大殿堂]'}, image: 'images/chara/ファスティバ.png', icon: 'images/icon/ファスティバ.jpg'},
{answer:'フィーナ', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'弓', weapon2:'-', unlock:'ヒロイックボウ', charge:'インヴィンシブル・クラッシャー', ability:'鬼滅☆3WAY！！', support:'無敵のドリル', age:'20歳', title:'[ゴブリンクラッシャー]'}, image: 'images/chara/フィーナ.png', icon: 'images/icon/フィーナ.jpg'},
{answer:'フィオリト', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'バーベル', charge:'ムスコロ・フィオリトゥーラ', ability:'トライロック・スマッシュ', support:'筋肉は裏切らない', age:'18歳', title:'[咲き誇る筋肉]'}, image: 'images/chara/フィオリト.png', icon: 'images/icon/フィオリト.jpg'},
{answer:'フィルキス', hints: {element:'土', type:'バランスタイプ', race:'レヴリス', sex:'女', weapon1:'短剣', weapon2:'銃', unlock:'無料で入手', charge:'ランサ・ヴォアドーラ', ability:'マジア・スポルチ', support:'退魔の血統', age:'15歳', title:'[退魔技師]'}, image: 'images/chara/フィルキス.png', icon: 'images/icon/フィルキス.jpg'},
{answer:'フィルレイン', hints: {element:'水', type:'特殊タイプ', race:'その他', sex:'女', weapon1:'槍', weapon2:'-', unlock:'銀氷の槍グレイシャー', charge:'シュティレヴァイス', ability:'銀氷の吐息', support:'それが貴方の最後の吐息', age:'年齢：不明', title:'[銀氷の竜乙女]'}, image: 'images/chara/フィルレイン.png', icon: 'images/icon/フィルレイン.jpg'},
{answer:'フェザー', hints: {element:'光', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'ホープナックル', charge:'レイジング・ブラストナックル', ability:'ライトニングナックルIII', support:'燃え滾る闘志', age:'18歳', title:'[蒼き迅雷の求道者]'}, image: 'images/chara/フェザー.png', icon: 'images/icon/フェザー.jpg'},
{answer:'フェディエル', hints: {element:'闇', type:'特殊タイプ', race:'ドラフ', sex:'性別：不詳', weapon1:'格闘', weapon2:'剣', unlock:'呪蝕の骸槍', charge:'リヴァーサルフレイム', ability:'カースドヒューネラル', support:'理外の『黒』', age:'20歳前後(ヒト型時)', title:'[六竜の『黒』]'}, image: 'images/chara/フェディエル.png', icon: 'images/icon/フェディエル.jpg'},
{answer:'フェニー', hints: {element:'火', type:'回復タイプ', race:'その他', sex:'女', weapon1:'杖', weapon2:'-', unlock:'不死鳥の灯火', charge:'シャラーラ・ハラーラ', ability:'マスダル・ショーラ', support:'不死鳥の神秘', age:'900歳以上', title:'[不死鳥の欠片]'}, image: 'images/chara/フェニー.png', icon: 'images/icon/フェニー.jpg'},
{answer:'フェリ', hints: {element:'光', type:'バランスタイプ', race:'エルーン', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'オーラフラジェルム', charge:'エーテリック・インペトゥス', ability:'フェアギフテン', support:'調教してやる', age:'13歳(享年)', title:'[幽獣の主]'}, image: 'images/chara/フェリ.png', icon: 'images/icon/フェリ.jpg'},
{answer:'フェルルカ', hints: {element:'土', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'杖', weapon2:'斧', unlock:'アイナ・アラカイ', charge:'オライ・ケ・アクア', ability:'エコル・マウ・マナ', support:'若き女王と猛き神', age:'20歳', title:'[泣き虫で臆病な王]'}, image: 'images/chara/フェルルカ.png', icon: 'images/icon/フェルルカ.jpg'},
{answer:'フォリア', hints: {element:'水', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'杖', weapon2:'格闘', unlock:'太歳精弓', charge:'風雅煌玉', ability:'ホワイトヴェール', support:'賢君忠臣', age:'年齢：不明', title:'[楽隠居の元国王]'}, image: 'images/chara/フォリア.png', icon: 'images/icon/フォリア.jpg'},
{answer:'フォルテ', hints: {element:'闇', type:'攻撃タイプ', race:'ドラフ', sex:'女', weapon1:'槍', weapon2:'-', unlock:'双竜槍', charge:'天覇魔竜槍', ability:'黒竜双撃波', support:'我が覇道に一点の曇り無し', age:'20歳', title:'[魔竜統]'}, image: 'images/chara/フォルテ.png', icon: 'images/icon/フォルテ.jpg'},
{answer:'フュンフ', hints: {element:'光', type:'回復タイプ', race:'ハーヴィン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'無料で入手', charge:'超！ 必殺技！！', ability:'サンシャイン', support:'魔道の申し子', age:'7歳', title:'[十天衆]'}, image: 'images/chara/フュンフ.png', icon: 'images/icon/フュンフ.jpg'},
{answer:'フラウ', hints: {element:'火', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'無料で入手', charge:'デビリッシュ・ランブル', ability:'クリムゾンナイトメア', support:'悪魔の腕', age:'24歳', title:'[鮮烈なる力]'}, image: 'images/chara/フラウ.png', icon: 'images/icon/フラウ.jpg'},
{answer:'フレイ', hints: {element:'風', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'剣', weapon2:'-', unlock:'グリンブルスティ', charge:'スリーズルグタンニ', ability:'ヴェルンドの剣', support:'神聖剣の輝き', age:'年齢：不明', title:'[憂憤の剣]'}, image: 'images/chara/フレイ.png', icon: 'images/icon/フレイ.jpg'},
{answer:'プレデター', hints: {element:'闇', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'プレデタークロー', charge:'サウザンド・クロウ', ability:'アサルト・ブロー', support:'復讐の捕食者', age:'23歳', title:'[黒百合の鎮魂歌]'}, image: 'images/chara/プレデター.png', icon: 'images/icon/プレデター.jpg'},
{answer:'ブローディア', hints: {element:'土', type:'防御タイプ', race:'星晶獣', sex:'女', weapon1:'剣', weapon2:'刀', unlock:'刃鏡片', charge:'ニーベルン・リフレクション', ability:'不可侵神域', support:'刃鏡展開', age:'年齢：不明', title:'[神域を護る美神]'}, image: 'images/chara/ブローディア.png', icon: 'images/icon/ブローディア.jpg'},
{answer:'フロレンス', hints: {element:'風', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ディスターバンスシグナ', charge:'天険呪法陣', ability:'ネビア', support:'英雄の導き手', age:'32歳', title:'[優美なる魔導師団長]'}, image: 'images/chara/フロレンス.png', icon: 'images/icon/フロレンス.jpg'},
{answer:'ベアトリクス', hints: {element:'闇', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'グラム', charge:'セイヴィアー・アンリーシュド', ability:'エムブラスクの剣', support:'エムブラスクの契約者', age:'21歳', title:'[不滅の群青]'}, image: 'images/chara/ベアトリクス.png', icon: 'images/icon/ベアトリクス.jpg'},
{answer:'ヘカテー', hints: {element:'火', type:'攻撃タイプ', race:'その他', sex:'女', weapon1:'杖', weapon2:'-', unlock:'夢幻の蝋杖', charge:'夢幻終宵', ability:'火光照らせし月夜', support:'真月の饗宴', age:'年齢：不明', title:'[妖艶なる冥妃]'}, image: 'images/chara/ヘカテー.png', icon: 'images/icon/ヘカテー.jpg'},
{answer:'ペトラ', hints: {element:'風', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ヘヴンズクラウド', charge:'ウェントス・イーラ', ability:'イリュジオン', support:'風の憩い', age:'18歳', title:'[天象の風]'}, image: 'images/chara/ペトラ.png', icon: 'images/icon/ペトラ.jpg'},
{answer:'ヘリヤ', hints: {element:'土', type:'防御タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'グレートスピア', charge:'マーセナリーブレード', ability:'剛剣', support:'鉄槍傭兵団頭領', age:'23歳', title:'[精錬されし頭領]'}, image: 'images/chara/ヘリヤ.png', icon: 'images/icon/ヘリヤ.jpg'},
{answer:'ヘルエス', hints: {element:'火', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'槍', weapon2:'杖', unlock:'ルーン', charge:'トガルキャンロディ', ability:'グレイヴンイメージ', support:'赤き舞槍', age:'27歳', title:'[亡国の希望]'}, image: 'images/chara/ヘルエス.png', icon: 'images/icon/ヘルエス.jpg'},
{answer:'ベルソー', hints: {element:'土', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'エペ・サンティユモン', charge:'アンブラッスマンブラ', ability:'エール・ド・レトラント', support:'抱卵の権能', age:'???歳（外見上は20歳前後）', title:'[錠前の堕天司]'}, image: 'images/chara/ベルソー.png', icon: 'images/icon/ベルソー.jpg'},
{answer:'ヘレル・ベン・シャレム', hints: {element:'闇', type:'特殊タイプ', race:'その他', sex:'不詳', weapon1:'槍', weapon2:'杖', unlock:'バブ・エル・マンデブ', charge:'ケイオス・レギオン', ability:'アバカブ', support:'審問と排斥の預言者', age:'年齢：不詳', title:'[宵の審問者]'}, image: 'images/chara/ヘレル・ベン・シャレム.png', icon: 'images/icon/ヘレル・ベン・シャレム.jpg'},
{answer:'ペンギー', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'格闘', weapon2:'銃', unlock:'硬式ナッコォ', charge:'超☆絶☆カラフリャースペシャル', ability:'P-ENリチャージ', support:'装甲オーバーヒート', age:'18歳', title:'[みんなのヒーロー]'}, image: 'images/chara/ペンギー.png', icon: 'images/icon/ペンギー.jpg'},
{answer:'ベンヌ', hints: {element:'土', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'シャジャラ・ジン', charge:'ネシュメト・クヘベス', ability:'ハボック・ピラー', support:'森と鳥と共に', age:'年齢：不明', title:'[幸せを運ぶ武人]'}, image: 'images/chara/ベンヌ.png', icon: 'images/icon/ベンヌ.jpg'},
{answer:'ポセイドン', hints: {element:'水', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'槍', weapon2:'-', unlock:'アトランティス', charge:'クリシス・トリアイナ', ability:'トリアイナ', support:'裁きの三叉槍', age:'年齢：不明', title:'[奔流の水神]'}, image: 'images/chara/ポセイドン.png', icon: 'images/icon/ポセイドン.jpg'},
{answer:'ホルス', hints: {element:'光', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ウアス・セプトラ', charge:'ニスル・サギール', ability:'サマー・ハークム', support:'ウジャド・アルクーワ', age:'年齢：不明', title:'[汀の光翼]'}, image: 'images/chara/ホルス.png', icon: 'images/icon/ホルス.jpg'},
{answer:'ボレミア', hints: {element:'光', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'アミュナ・サイフォス', charge:'アンブレイカブル・エッジ', ability:'スレッジファング', support:'砂塵の先導者', age:'26歳', title:'[不撓の系譜]'}, image: 'images/chara/ボレミア.png', icon: 'images/icon/ボレミア.jpg'},
{answer:'マーズ', hints: {element:'光', type:'攻撃タイプ', race:'星晶獣', sex:'女', weapon1:'槍', weapon2:'斧', unlock:'ブレイジングランス', charge:'ブレイズグロウ・スラスト', ability:'焦天槍斧', support:'アルデンス・サクラム', age:'年齢：不明', title:'[焦熱猛る炎将]'}, image: 'images/chara/マーズ.png', icon: 'images/icon/マーズ.jpg'},
{answer:'マイシェラ', hints: {element:'光', type:'特殊タイプ', race:'エルーン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'森神の祈杖', charge:'ルーン・シルフライク', ability:'猛攻のルーン', support:'美とルーンの探究', age:'年齢：秘密', title:'[秀麗なる探求者]'}, image: 'images/chara/マイシェラ.png', icon: 'images/icon/マイシェラ.jpg'},
{answer:'マギサ', hints: {element:'火', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'格闘', unlock:'イリュージョンセプター', charge:'メテオスウォーム・イメンス', ability:'イラプション', support:'魔神モラクス召喚', age:'年齢：不明', title:'[ウィッチクラフト]'}, image: 'images/chara/マギサ.png', icon: 'images/icon/マギサ.jpg'},
{answer:'マキュラ・マリウス', hints: {element:'水', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'氷星の煌杖', charge:'ヨトゥン・ヘイム', ability:'氷煌の一振', support:'白銀の氷華', age:'年齢：不明', title:'[玉塵の裁姫]'}, image: 'images/chara/マキュラ・マリウス.png', icon: 'images/icon/マキュラ・マリウス.jpg'},
{answer:'マキラ', hints: {element:'土', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'楽器', weapon2:'格闘', unlock:'天干地支弓・酉之飾', charge:'鳥明叡知', ability:'鼓舞激励', support:'鳥神宮の主', age:'16歳', title:'[西の守護神]'}, image: 'images/chara/マキラ.png', icon: 'images/icon/マキラ.jpg'},
{answer:'マコラ', hints: {element:'光', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'刀', weapon2:'-', unlock:'天干地支刀・卯之飾', charge:'卯化登仙', ability:'二兎追走', support:'卯神宮の主', age:'20歳', title:'[東の守護神]'}, image: 'images/chara/マコラ.png', icon: 'images/icon/マコラ.jpg'},
{answer:'マッコイ', hints: {element:'土', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'短剣', weapon2:'-', unlock:'密偵の懐剣', charge:'シュメタリン・シャテン', ability:'シュピンネンネッツ', support:'陰に生きる密偵', age:'38歳', title:'[ブルースカイ ビバップ]'}, image: 'images/chara/マッコイ.png', icon: 'images/icon/マッコイ.jpg'},
{answer:'マナマル', hints: {element:'闇', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'ガーリッシュドルチェ', charge:'ピッコリ・ラビア', ability:'ドルミーレ', support:'激情の守護者', age:'17歳', title:'[姉ぴしか勝たんので]'}, image: 'images/chara/マナマル.png', icon: 'images/icon/マナマル.jpg'},
{answer:'マヌ＝ポヌマウ', hints: {element:'闇', type:'防御タイプ', race:'ヴォルヴィル', sex:'女', weapon1:'槍', weapon2:'格闘', unlock:'マッシブ・メンター・ドリル', charge:'ボーリング・ドーリング', ability:'ポッピング・ブラスティング', support:'のんびりの第一人者', age:'13歳', title:'[悠々少女]'}, image: 'images/chara/マヌ＝ポヌマウ.png', icon: 'images/icon/マヌ＝ポヌマウ.jpg'},
{answer:'マリア・テレサ', hints: {element:'水', type:'バランスタイプ', race:'ドラフ', sex:'女', weapon1:'杖', weapon2:'剣', unlock:'無料で入手', charge:'アストレア・ジュディーツィオ', ability:'アブラクサス', support:'正義の断罪', age:'17歳', title:'[義憤の女帝]'}, image: 'images/chara/マリア・テレサ.png', icon: 'images/icon/マリア・テレサ.jpg'},
{answer:'マルキアレス', hints: {element:'闇', type:'特殊タイプ', race:'ハーヴィン', sex:'男', weapon1:'杖', weapon2:'-', unlock:'グリダーヴォル', charge:'エレメンタル・ギャラクシー', ability:'アンホーリー・ウォークライ', support:'BA☆KU☆RE☆TSU', age:'227歳', title:'[星幽の大魔導士]'}, image: 'images/chara/マルキアレス.png', icon: 'images/icon/マルキアレス.jpg'},
{answer:'ミカエル', hints: {element:'火', type:'攻撃タイプ', race:'星晶獣', sex:'女', weapon1:'剣', weapon2:'-', unlock:'クリムゾンスケイル', charge:'ゴットハード', ability:'パンテラ', support:'エクリクシ', age:'年齢：不明', title:'[火の天司]'}, image: 'images/chara/ミカエル.png', icon: 'images/icon/ミカエル.jpg'},
{answer:'ミニゴブ', hints: {element:'光', type:'特殊タイプ', race:'その他', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ケーン・オブ・シャイニー', charge:'ピカピカ・ペイント', ability:'すごいぼんやりするゴブ', support:'人と獣人の架け橋', age:'???歳(数えてないゴブ！)', title:'[覚醒の獣人]'}, image: 'images/chara/ミニゴブ.png', icon: 'images/icon/ミニゴブ.jpg'},
{answer:'ミランダ', hints: {element:'火', type:'回復タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'チャーミング・ブルーム', charge:'チャーミング・レッスン', ability:'ルーセントチャーム', support:'院教師', age:'25歳', title:'[溌剌たる指導者]'}, image: 'images/chara/ミランダ.png', icon: 'images/icon/ミランダ.jpg'},
{answer:'ミリン', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'刀', weapon2:'-', unlock:'春乱・真打', charge:'桜花来福', ability:'乱咲', support:'振るう刀に信念を', age:'18歳', title:'[サムライハート]'}, image: 'images/chara/ミリン.png', icon: 'images/icon/ミリン.jpg'},
{answer:'ムゲン', hints: {element:'火', type:'攻撃タイプ', race:'ドラフ', sex:'男', weapon1:'格闘', weapon2:'楽器', unlock:'ケラク', charge:'ジャイアント・バン', ability:'鋼体の護り', support:'緩やかな滅びの中で', age:'年齢：不明', title:'[鋼体童子]'}, image: 'images/chara/ムゲン.png', icon: 'images/icon/ムゲン.jpg'},
{answer:'メイガス', hints: {element:'闇', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ビヨンド・ザ・ディマイズ', charge:'マレウス・デ・グラージ', ability:'マレフィクス・デモリア', support:'誇り高き原初獣', age:'年齢：不明', title:'[緑陰の女鬼]'}, image: 'images/chara/メイガス.png', icon: 'images/icon/メイガス.jpg'},
{answer:'メーテラ', hints: {element:'風', type:'バランスタイプ', race:'エルーン', sex:'女', weapon1:'弓', weapon2:'-', unlock:'エーテリアルボウ', charge:'グリームパルパーション', ability:'飾り穿ち', support:'天才肌', age:'25歳', title:'[天稟の射手]'}, image: 'images/chara/メーテラ.png', icon: 'images/icon/メーテラ.jpg'},
{answer:'メドゥーサ', hints: {element:'土', type:'バランスタイプ', race:'星晶獣', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'エウリピデス', charge:'ラスト・メドゥシアナ', ability:'マイティー・アイ', support:'リタリエーションメドゥシアナ', age:'年齢：不明', title:'[愛寵の蛇眼]'}, image: 'images/chara/メドゥーサ.png', icon: 'images/icon/メドゥーサ.jpg'},
{answer:'メリッサベル', hints: {element:'風', type:'攻撃タイプ', race:'ハーヴィン', sex:'女', weapon1:'剣', weapon2:'斧', unlock:'スプリットエンド', charge:'五月乱髪', ability:'コンティニュウム', support:'自動迎撃毛刃', age:'23歳', title:'[髪長姫]'}, image: 'images/chara/メリッサベル.png', icon: 'images/icon/メリッサベル.jpg'},
{answer:'メルゥ', hints: {element:'土', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'槍', weapon2:'斧', unlock:'ヴァサーゴ', charge:'アクア・ラナキラ', ability:'ワイルドフロウ', support:'さっちゃんといっしょ', age:'14歳', title:'[蛮愁の稀人]'}, image: 'images/chara/メルゥ.png', icon: 'images/icon/メルゥ.jpg'},
{answer:'メレアガンス', hints: {element:'土', type:'防御タイプ', race:'その他', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'アルト・ナーゲル', charge:'アルト・ゲブリュル', ability:'シルトシュトルム', support:'アヴァロンの憶竜', age:'27歳(封印された当時の年齢)', title:'[希死の殉難者]'}, image: 'images/chara/メレアガンス.png', icon: 'images/icon/メレアガンス.jpg'},
{answer:'モニカ', hints: {element:'風', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'刀', unlock:'スカイエース', charge:'旋風雷閃撃鎖斬', ability:'覇旋雷閃', support:'ブリッツシュヴェルト', age:'お嬢さんというような歳ではない', title:'[自由なる剣閃]'}, image: 'images/chara/モニカ.png', icon: 'images/icon/モニカ.jpg'},
{answer:'ヤイア', hints: {element:'土', type:'特殊タイプ', race:'ドラフ', sex:'女', weapon1:'剣', weapon2:'-', unlock:'ヤイアのちゃーはん', charge:'なかなおり♪', ability:'あたらしいおようふく！', support:'護っていく、この笑顔', age:'6歳', title:'[継承の妹君]'}, image: 'images/chara/ヤイア.png', icon: 'images/icon/ヤイア.jpg'},
{answer:'ヤチマ', hints: {element:'水', type:'特殊タイプ', race:'その他', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ルベウス・スティーリア', charge:'月ノ祈リ', ability:'ディグレイド・スピネル', support:'幾百年の時を共に', age:'年齢：不明', title:'[裁考密度の純心]'}, image: 'images/chara/ヤチマ.png', icon: 'images/icon/ヤチマ.jpg'},
{answer:'ユイシス', hints: {element:'風', type:'バランスタイプ', race:'エルーン', sex:'女', weapon1:'剣', weapon2:'刀', unlock:'イイルクーン', charge:'破煌刃・暁天/破煌刃・神薙', ability:'断固たる定見/不忠への報い', support:'忠義の魔具', age:'21歳', title:'[再興を求めし義侠騎士]'}, image: 'images/chara/ユイシス.png', icon: 'images/icon/ユイシス.jpg'},
{answer:'ユーステス', hints: {element:'土', type:'攻撃タイプ', race:'エルーン', sex:'男', weapon1:'銃', weapon2:'-', unlock:'ストラトゥムバンカー', charge:'デッドエンド・シュート', ability:'フラメクの雷', support:'フラメクの契約者', age:'28歳', title:'[地砕の霹狼]'}, image: 'images/chara/ユーステス.png', icon: 'images/icon/ユーステス.jpg'},
{answer:'ユーリ', hints: {element:'水', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'-', unlock:'義勇のキリジ', charge:'ドゥーム・ブレイク', ability:'インプロ・コンビネーション', support:'最高のコンビネーション', age:'16歳', title:'[広大無量の道を往く]'}, image: 'images/chara/ユーリ.png', icon: 'images/icon/ユーリ.jpg'},
{answer:'ユエル', hints: {element:'火', type:'バランスタイプ', race:'エルーン', sex:'女', weapon1:'刀', weapon2:'楽器', unlock:'緋紋の絢斧', charge:'紅之舞・融月', ability:'紅蓮', support:'融月', age:'19歳', title:'[千年を探す者]'}, image: 'images/chara/ユエル.png', icon: 'images/icon/ユエル.jpg'},
{answer:'ユグドラシル', hints: {element:'土', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'ベッラ・アエテルヌス', charge:'創世のルミノックス', ability:'ブローナド・ノルン', support:'慈愛の大樹', age:'年齢：不明', title:'[創樹の守人]'}, image: 'images/chara/ユグドラシル.png', icon: 'images/icon/ユグドラシル.jpg'},
{answer:'ユニ', hints: {element:'光', type:'バランスタイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ハルモニア', charge:'インノートム・ユニバース', ability:'リヴァイタライズ', support:'調停の御使い', age:'年齢：不明', title:'[調停のいとし子]'}, image: 'images/chara/ユニ.png', icon: 'images/icon/ユニ.jpg'},
{answer:'ユリウス', hints: {element:'風', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'杖', unlock:'リターナースタッフ', charge:'テンタクル・サルタティオ', ability:'トゥルーインクワイア', support:'真理の探究', age:'25歳', title:'[決意の知爵]'}, image: 'images/chara/ユリウス.png', icon: 'images/icon/ユリウス.jpg'},
{answer:'ヨウ', hints: {element:'光', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'格闘', weapon2:'刀', unlock:'藍炎之刃', charge:'空之舞・黯刀', ability:'宇都志之焔', support:'兄妹の絆', age:'12歳', title:'[愛縁の舞い手]'}, image: 'images/chara/ヨウ.png', icon: 'images/icon/ヨウ.jpg'},
{answer:'ヨダルラーハ', hints: {element:'水', type:'攻撃タイプ', race:'ハーヴィン', sex:'男', weapon1:'剣', weapon2:'刀', unlock:'不動国行', charge:'万結一閃・迅', ability:'十起', support:'絶句', age:'67歳', title:'[変幻自在の妖剣士]'}, image: 'images/chara/ヨダルラーハ.png', icon: 'images/icon/ヨダルラーハ.jpg'},
{answer:'ラインハルザ', hints: {element:'火', type:'攻撃タイプ', race:'ドラフ', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'絶拳', charge:'烈・火・絶・招', ability:'紅焔掌', support:'魂の闘気', age:'29歳', title:'[暁旦の烈鬼]'}, image: 'images/chara/ラインハルザ.png', icon: 'images/icon/ラインハルザ.jpg'},
{answer:'ラヴィリタ', hints: {element:'火', type:'バランスタイプ', race:'ハーヴィン', sex:'男', weapon1:'剣', weapon2:'銃', unlock:'グラッドビーク', charge:'アーケイン・ブレイダンス', ability:'ターリオ・エッフィチェンテ', support:'「ルピ座」の輝き', age:'情報料1000ルピ', title:'[稀代の怪商]'}, image: 'images/chara/ラヴィリタ.png', icon: 'images/icon/ラヴィリタ.jpg'},
{answer:'ラガッツォ', hints: {element:'火', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'クリムゾンスティンガー', charge:'メルトブレイン・バースト', ability:'カンノーネ・フィアンマ', support:'ケジメの付け方', age:'18歳', title:'[規律と自由の二重奏]'}, image: 'images/chara/ラガッツォ.png', icon: 'images/icon/ラガッツォ.jpg'},
{answer:'ラカム', hints: {element:'火', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'銃', weapon2:'-', unlock:'ベネディーア', charge:'ナバルストライク', ability:'スピットファイア', support:'スライトオブハンド', age:'29歳', title:'[蒼空の先導者]'}, image: 'images/chara/ラカム.png', icon: 'images/icon/ラカム.jpg'},
{answer:'ラグナ', hints: {element:'土', type:'特殊タイプ', race:'ドラフ', sex:'女', weapon1:'槍', weapon2:'-', unlock:'バリアントランス', charge:'アン・パラ・レルド', ability:'ピアシングウェア', support:'ウォーマーリコレクション', age:'22歳', title:'[怪力舞槍]'}, image: 'images/chara/ラグナ.png', icon: 'images/icon/ラグナ.jpg'},
{answer:'ラジエル', hints: {element:'光', type:'バランスタイプ', race:'星晶獣', sex:'女', weapon1:'銃', weapon2:'杖', unlock:'無料で入手', charge:'エンジェリック・アサルト', ability:'183頁　拘束の章', support:'経験と知識の集積', age:'年齢：不明', title:'[神秘の天司]'}, image: 'images/chara/ラジエル.png', icon: 'images/icon/ラジエル.jpg'},
{answer:'ラスティナ', hints: {element:'土', type:'防御タイプ', race:'ドラフ', sex:'女', weapon1:'槍', weapon2:'銃', unlock:'ゲイダーグ', charge:'ファトゥム・リベラティオ', ability:'アブソルート・ユスティーツ', support:'チャージ', age:'20歳', title:'[天穿の銃槍騎]'}, image: 'images/chara/ラスティナ.png', icon: 'images/icon/ラスティナ.jpg'},
{answer:'ラファエル', hints: {element:'風', type:'攻撃タイプ', race:'星晶獣', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'天風の鋭輪', charge:'シックル・シメオン', ability:'メガロス・ウェントス', support:'スマラグディ', age:'年齢：不明', title:'[風の天司]'}, image: 'images/chara/ラファエル.png', icon: 'images/icon/ラファエル.jpg'},
{answer:'ラムレッダ', hints: {element:'土', type:'特殊タイプ', race:'ドラフ', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'ハート・ソングバーズ', charge:'羅無打武零苦', ability:'セイントハイロゥ', support:'もう動けないにゃ………', age:'27歳', title:'[清廉なりし修道女]'}, image: 'images/chara/ラムレッダ.png', icon: 'images/icon/ラムレッダ.jpg'},
{answer:'ラモラック', hints: {element:'風', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'杖', weapon2:'-', unlock:'ツークフォーゲル・フェーダー', charge:'グリュン・ラウニッシュ', ability:'ツェアライセン', support:'緑陰の颯仙', age:'31歳', title:'[颯仙]'}, image: 'images/chara/ラモラック.png', icon: 'images/icon/ラモラック.jpg'},
{answer:'ランスロット', hints: {element:'水', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'短剣', unlock:'霧氷剣ペルソス', charge:'ヴァイス・フリューゲル', ability:'ブレードインパルス', support:'一騎当千', age:'27歳', title:'[俊英の双剣士]'}, image: 'images/chara/ランスロット.png', icon: 'images/icon/ランスロット.jpg'},
{answer:'ランドル', hints: {element:'風', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'格闘', weapon2:'-', unlock:'ボン・ジョワ', charge:'ゲイルブート', ability:'ハイキック・エア', support:'宝瓶宮の適合者', age:'18歳', title:'[猛き疾風の求道者]'}, image: 'images/chara/ランドル.png', icon: 'images/icon/ランドル.jpg'},
{answer:'リーシャ', hints: {element:'風', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'リユニオン', charge:'トワイライトソード', ability:'ソニックアウト', support:'秩序の騎空団団長代理', age:'21歳', title:'[蒼導の剣]'}, image: 'images/chara/リーシャ.png', icon: 'images/icon/リーシャ.jpg'},
{answer:'リチャード', hints: {element:'風', type:'特殊タイプ', race:'ヒューマン', sex:'男', weapon1:'銃', weapon2:'-', unlock:'ロイヤルストレートフラッシュ', charge:'エンドオブゲーム', ability:'トゥワーズ・ザ・ゲーム', support:'賽を振らないと始まらない', age:'32歳', title:'[一張羅の勝負師]'}, image: 'images/chara/リチャード.png', icon: 'images/icon/リチャード.jpg'},
{answer:'リッチ', hints: {element:'闇', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ペイン・アンド・ストレイン', charge:'デッド・バッド・エンド', ability:'ファントムペイン', support:'不死の呼び声', age:'年齢：不詳', title:'[陰気陰湿陰険少女]'}, image: 'images/chara/リッチ.png', icon: 'images/icon/リッチ.jpg'},
{answer:'リリィ', hints: {element:'水', type:'回復タイプ', race:'その他', sex:'女', weapon1:'杖', weapon2:'-', unlock:'氷晶杖', charge:'フローズン・ブルーム', ability:'氷晶結界', support:'シャインクリスタル', age:'12歳', title:'[氷国の希望]'}, image: 'images/chara/リリィ.png', icon: 'images/icon/リリィ.jpg'},
{answer:'リルル', hints: {element:'水', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'楽器', weapon2:'-', unlock:'メロディックスフィア', charge:'リルル・エターナル・ライヴ', ability:'翼があれば、きっと届くよ。', support:'胸が張り裂けそう', age:'13歳', title:'[夢見る音符]'}, image: 'images/chara/リルル.png', icon: 'images/icon/リルル.jpg'},
{answer:'ル・オー', hints: {element:'光', type:'回復タイプ', race:'エルーン', sex:'性別：不詳', weapon1:'格闘', weapon2:'杖', unlock:'威光の逆鱗', charge:'導の破閃', ability:'誕光の祝詞', support:'理外の『白』', age:'20代前半の男性を想定(ヒト型時)', title:'[六竜の『白』]'}, image: 'images/chara/ル・オー.png', icon: 'images/icon/ル・オー.jpg'},
{answer:'ルシウス', hints: {element:'闇', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'刀', unlock:'極・白刃', charge:'絶禍・白刃一掃', ability:'白刃炎斬', support:'剣聖を継ぐ者', age:'28歳', title:'[悲憤慷慨の剣客]'}, image: 'images/chara/ルシウス.png', icon: 'images/icon/ルシウス.jpg'},
{answer:'ルシオ', hints: {element:'光', type:'バランスタイプ', race:'その他', sex:'男', weapon1:'刀', weapon2:'剣', unlock:'エデン', charge:'コール・オブ・エデン', ability:'イヴ・オブ・シダクション', support:'明けの明星', age:'年齢：不詳', title:'[暁の裁定者]'}, image: 'images/chara/ルシオ.png', icon: 'images/icon/ルシオ.jpg'},
{answer:'ルナール', hints: {element:'闇', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ルーリングペン', charge:'ディザスター・コミックス', ability:'ファクシミリII', support:'入稿完了', age:'22歳', title:'[妄想少女X]'}, image: 'images/chara/ルナール.png', icon: 'images/icon/ルナール.jpg'},
{answer:'ルリア', hints: {element:'※', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'格闘', weapon2:'-', unlock:'無料で入手', charge:'カタストロフィ・バイウィル', ability:'永遠の蒼', support:'星の喚び声', age:'年齢：不明', title:'[永遠の蒼の少女]'}, image: 'images/chara/ルリア.png', icon: 'images/icon/ルリア.jpg'},
{answer:'ルロウホロウ', hints: {element:'風', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'銃', weapon2:'-', unlock:'ヒヒイロカネ飾ってみた', charge:'ヒヒイロアメアラレ', ability:'投資してあげちゃう♪', support:'幸運の気配', age:'年齢：ひ・み・つ～♪', title:'[亨運]'}, image: 'images/chara/ルロウホロウ.png', icon: 'images/icon/ルロウホロウ.jpg'},
{answer:'レ・フィーエ', hints: {element:'光', type:'回復タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'ケーリュケイオン', charge:'セブンスディスパージョン', ability:'プルウィウス', support:'煌めきの結界', age:'17歳', title:'[七宝石の姫]'}, image: 'images/chara/レ・フィーエ.png', icon: 'images/icon/レ・フィーエ.jpg'},
{answer:'レイ', hints: {element:'闇', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'杖', weapon2:'刀', unlock:'シューニャ', charge:'五眼掌握・寂光浄土', ability:'阿頼耶識', support:'悟りの智慧', age:'年齢：不明', title:'[悟心瞳師]'}, image: 'images/chara/レイ.png', icon: 'images/icon/レイ.jpg'},
{answer:'レオナ', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'槍', weapon2:'-', unlock:'八幡薙刀', charge:'獅子爆咬散', ability:'雲裂き', support:'贖罪の獅子', age:'27歳', title:'[旅立ちの守護獅子]'}, image: 'images/chara/レオナ.png', icon: 'images/icon/レオナ.jpg'},
{answer:'レディ・グレイ', hints: {element:'闇', type:'特殊タイプ', race:'ヒューマン', sex:'女', weapon1:'槍', weapon2:'格闘', unlock:'ウコンバサラ', charge:'ボーン・デスワルツ', ability:'ダーク', support:'愛憎の衝動', age:'30歳', title:'[心眼の双葬女]'}, image: 'images/chara/レディ・グレイ.png', icon: 'images/icon/レディ・グレイ.jpg'},
{answer:'レナ', hints: {element:'風', type:'回復タイプ', race:'ヒューマン', sex:'女', weapon1:'杖', weapon2:'-', unlock:'ファラウェイ', charge:'ル・アンフェー・デ・フルール', ability:'ミストラルブーケ', support:'魔生花の楔', age:'27歳', title:'[花創の術師]'}, image: 'images/chara/レナ.png', icon: 'images/icon/レナ.jpg'},
{answer:'ローアイン', hints: {element:'闇', type:'特殊タイプ', race:'エルーン', sex:'男', weapon1:'短剣', weapon2:'剣', unlock:'ドン・パリピニオン', charge:'ツォンペリシャワー入ります！', ability:'ベストマッチョなおもてなし！', support:'ワチャって応援！', age:'22歳', title:'[トホスに生えてきたタンポポ]'}, image: 'images/chara/ローアイン.png', icon: 'images/icon/ローアイン.jpg'},
{answer:'ロザミア', hints: {element:'光', type:'バランスタイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'デュアルヘリックス', charge:'操符剣術・晦冥閃', ability:'活冑符・改弐', support:'喪失する自我', age:'20歳', title:'[仮面に囚われし復讐者]'}, image: 'images/chara/ロザミア.png', icon: 'images/icon/ロザミア.jpg'},
{answer:'ロゼッタ', hints: {element:'風', type:'特殊タイプ', race:'星晶獣', sex:'女', weapon1:'短剣', weapon2:'-', unlock:'エターナル・ラヴ', charge:'エターニティ・ローズ', ability:'薔薇の結界', support:'薔薇の女王', age:'年齢：不明', title:'[蒼麗の薔薇]'}, image: 'images/chara/ロゼッタ.png', icon: 'images/icon/ロゼッタ.jpg'},
{answer:'ロベリア', hints: {element:'土', type:'攻撃タイプ', race:'ヒューマン', sex:'男', weapon1:'杖', weapon2:'格闘', unlock:'無料で入手', charge:'ル・デルニエ・コンセール', ability:'デストラクティヴ・アージ', support:'塔の再生', age:'22歳', title:'[禍殃なる魔術師]'}, image: 'images/chara/ロベリア.png', icon: 'images/icon/ロベリア.jpg'},
{answer:'ロベルティナ', hints: {element:'光', type:'特殊タイプ', race:'ハーヴィン', sex:'女', weapon1:'楽器', weapon2:'-', unlock:'ヴィオラ・ナストロ', charge:'グラツィア・ラプソディー', ability:'イル・カント・アズーロ', support:'優雅なる奏鳴曲', age:'年齢：???', title:'[天啓のチュービスト]'}, image: 'images/chara/ロベルティナ.png', icon: 'images/icon/ロベルティナ.jpg'},
{answer:'ロボミ', hints: {element:'光', type:'攻撃タイプ', race:'その他', sex:'女', weapon1:'銃', weapon2:'-', unlock:'レールガン', charge:'ハイパー・ソニック・スマッシャー', ability:'超斥力ストーム', support:'リレーション・コンバーター', age:'年齢：データ不明', title:'[愛宿せし鋼の戦士]'}, image: 'images/chara/ロボミ.png', icon: 'images/icon/ロボミ.jpg'},
{answer:'ロミオ', hints: {element:'水', type:'バランスタイプ', race:'ヒューマン', sex:'男', weapon1:'剣', weapon2:'杖', unlock:'モンタギュオウス', charge:'ソーレ・ディ・ヴェローナ', ability:'ラーマ・アクゥータ', support:'ヴェローナの守護精霊', age:'22歳', title:'[想国の神王]'}, image: 'images/chara/ロミオ.png', icon: 'images/icon/ロミオ.jpg'},
{answer:'ワムデュス', hints: {element:'水', type:'防御タイプ', race:'ハーヴィン', sex:'性別：不詳', weapon1:'杖', weapon2:'斧', unlock:'水禍の麗傘', charge:'ヒドロゾア', ability:'スターヴィングドレイン', support:'理外の『碧』', age:'外見上は10歳に満たない(ヒト型時)', title:'[六竜の『碧』]'}, image: 'images/chara/ワムデュス.png', icon: 'images/icon/ワムデュス.jpg'},
{answer:'黄金の騎士', hints: {element:'土', type:'攻撃タイプ', race:'エルーン', sex:'女', weapon1:'剣', weapon2:'-', unlock:'セラステス', charge:'星閉刃・黄昏', ability:'グレイトホライゾン', support:'黄金の鎧', age:'28歳', title:'[七曜の騎士]'}, image: 'images/chara/黄金の騎士.png', icon: 'images/icon/黄金の騎士.jpg'},
{answer:'黒騎士', hints: {element:'闇', type:'攻撃タイプ', race:'ヒューマン', sex:'女', weapon1:'剣', weapon2:'銃', unlock:'ブルトガング', charge:'無明剣', ability:'クアッドスペル', support:'絶望の剣', age:'年齢：不明', title:'[七曜の騎士]'}, image: 'images/chara/黒騎士.png', icon: 'images/icon/黒騎士.jpg'},
];
const QUIZ_COUNT = 10;
const cardsForm = document.getElementById('cards-form');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const resultText1 = document.getElementById('result1');
const resultText2 = document.getElementById('result2');
const scoreBoard = document.getElementById('score-board');
const resultImage = document.getElementById('result-image');
const scoreImage = document.getElementById('score-image');
const shareLinks = document.getElementById('share-links');
const currentQuizNumber = document.getElementById('current-quiz-number');
let quisSubset = [];
let currentIndex = 0;
let currentReveals = 0;
let score = 0;
let pulldown;

// ゲームスタート
function startgame() {
    // select要素にallQuizDataのanswerを格納する
    createSelectOptions();
    // 問題の10問をシャッフルしてquisSubsetに格納する。
    quisSubset = shuffleArray(allQuizData).slice(0, Math.min(QUIZ_COUNT, allQuizData.length));

    // 初期化
    currentIndex = 0;
    currentReveals = 0;
    score = 0;
    scoreImage.style.display = 'none';
    shareLinks.style.display = 'none';
    // クイズ開始
    loadNextQuestion();
}

// プルダウンリストの格納
function createSelectOptions(){
    let options = [];

    pulldown = new TomSelect('#answer-input', {
        create: false,
        maxItems: 1,
        maxOptions: allQuizData.length,
        searchField: 'value',
        render: {
            // ドロップダウン内の選択肢の見た目
            option: function(data, escape) {
                return `<div class="choices"><img src="${escape(data.src)}">${escape(data.text)}</div>`;
            },
            // 選択して入力欄に表示された状態の見た目
            item: function(data, escape) {
                return `<div class="choices"><img src="${escape(data.src)}">${escape(data.text)}</div>`;
            }
        },
        score: function(search) {
            // 全角・半角、カタカナ・ひらがな、長音符の差異を吸収する関数を定義
            function normalize(str) {
                return str
                    .replace(/[\u30a1-\u30f6]/g, function(match) {
                        // カタカナをひらがなに変換
                        return String.fromCharCode(match.charCodeAt(0) - 0x60);
                    })
                    .toLowerCase();
            }

            var searchNorm = normalize(search);

            return function(data) {
                var textNorm = normalize(data.text || '');
                var score = 0;
                if (textNorm.indexOf(searchNorm) !== -1) { score = 1; }
                return score;
            };
        }
    });
    allQuizData.forEach ((element) => {
        options.push({
            value: element.answer,
            text: element.answer,
            src: element.icon,
        });
    });
    pulldown.addOptions(options);
    pulldown.refreshOptions(false);
}



// 次の設問の準備を行う
function loadNextQuestion () {
    // 各種初期化
    // ヒントのreveal(開き済)カウントを初期化
    currentReveals = 0;
    // cardsForm要素内のcard要素を削除（初期化）
    cardsForm.innerHTML = '';
    // 解答用Inputを初期化
    answerInput.value = '';
    answerInput.style.display = 'inline-block';
    answerInput.disabled = false;
    // 回答ボタンの初期化
    submitBtn.disabled = true;
    submitBtn.style.display = 'inline-block';
    // 答えの文字列を初期化
    resultText1.textContent = '';
    resultText2.textContent = '';
    // 答えの画像を初期化
    resultImage.style.display = 'none';
    resultImage.src = '';
    // 最終スコアの表示初期化(非表示化)
    scoreBoard.style.display = 'none';
    scoreImage.style.display = 'none';
    shareLinks.style.display = 'none';


    // クイズが10問以上の場合、スコア発表に遷移
    if( currentIndex >= quisSubset.length ){
        showFinalScore();
        return;
    } 
    // quisSubset内のhints配列を分割代入
    const { hints } = quisSubset[currentIndex];
    let hintsArray = convertHintsToArray(hints);

    // hintsをシャッフル
    const shuffledHints = shuffleArray(hintsArray.slice());

    // 各ヒントの作成
    shuffledHints.forEach((hint) => {
        const card = document.createElement('div');
        // card属性の付与
        card.classList.add('card');
        // ヒントの見出し作成
        card.innerHTML = '<img src="images/question.jpg">';
        // ヒントをクリックした時の処理を登録
        card.addEventListener('click', () => revealHint(card, hint));
        // cardsForm要素内に作成したcard要素を格納
        cardsForm.appendChild(card);
    });
}

function convertHintsToArray(hints) {
    const cloneArray = [];
  
    cloneArray.push(`<img src="images/element/${hints.element}.png">`);
    cloneArray.push(`<img src="images/race/${hints.race}.png">/ ${hints.sex}`);
    if (hints.weapon2 == '-') {
        cloneArray.push(`<img src="images/mainWeapon/${hints.weapon1}.png">`);
    } else {
        cloneArray.push(`<img src="images/mainWeapon/${hints.weapon1}.png"><img src="images/mainWeapon/${hints.weapon2}.png">`);
    }
    cloneArray.push(hints.type);
    cloneArray.push(hints.unlock);
    cloneArray.push(hints.charge);
    cloneArray.push(hints.ability);
    cloneArray.push(hints.support);
    cloneArray.push(hints.age);
    cloneArray.push(hints.title);
  
    return cloneArray
}
// ヒントをクリック/タップした際の処理
function revealHint(card, hint){
    // revealed(開き済)のヒントをクリックした場合は何もせずにreturn
    if( card.classList.contains('revealed') ){
        return;
    }
    // revealed(開き済)の属性を付与
    card.classList.add('revealed');
    // 表示をhintの文字列に変更
    card.innerHTML = hint;
    // reveal(開き済)カウントをインクリメント
    currentReveals++;
    // reveal(開き済)カウントが1以上ならば回答ボタンを押せるようにする
    if (currentReveals > 0) {
        submitBtn.disabled = false;
    } 
}

// 答え合わせ
async function checkAnswer(){
    // 空白を削除した文字列を格納
    const userAnswer = answerInput.value.trim();
    // 現問題の答えの文字列を格納
    const correntAnswer = quisSubset[currentIndex].answer;
    // 1つもヒントをめくらずに回答ボタンを押下
    if ( currentReveals === 0 ) {
        alert('まずはヒントを１つ以上めくってから回答してください');
        return;
    }
    // 答えを選択せずに回答ボタンを押下
    if ( userAnswer === '' ) {
        alert('答えを入力してください');
        return;
    }

    
    if ( userAnswer === correntAnswer ) {// 答えが一致した場合
        const points = Math.max(1, 11 - currentReveals);
        score += points;
        resultText1.textContent = `正解！`;
        resultText2.textContent = `${points}点獲得(クリックで次へ)`;
        showAnswerImage();
        submitBtn.disabled = true;
        answerInput.disabled = true;
        if ( currentIndex >= quisSubset.length - 1 ) {
            setTimeout(() => {
                showFinalScore();
            }, 2000);
        } else {
            await sleep(500);
            document.addEventListener('click', () => {
                currentIndex++;
                currentQuizNumber.textContent = `現在${currentIndex + 1}問目`;
                loadNextQuestion();
            }, {'once': true});
        }
    } else {// 答えを間違えた場合
        resultText1.textContent = `不正解！`;
        resultText2.textContent = `正解は「${correntAnswer}」(クリックで次へ)`;
        showAnswerImage();
        submitBtn.disabled = true;
        if ( currentIndex >= quisSubset.length - 1 ) {
            answerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            setTimeout(() => {
                showFinalScore();
            }, 2000);
        } else {
            answerInput.disabled = true;
            await sleep(500);
            document.addEventListener('click', () => {
                currentIndex++;
                currentQuizNumber.textContent = `現在${currentIndex + 1}問目`;
                loadNextQuestion();
                answerInput.disabled = false;
            }, {'once': true});
        }
    }
}

// 設問の正解と正解画像を表示する
function showAnswerImage() {
    // 答えの画像を表示
    resultImage.src = quisSubset[currentIndex].image;
    resultImage.style.display = 'block'
}
// 最終結果を表示する
function showFinalScore(){
    // resultText はそのまま保持
    scoreBoard.style.display = 'block';
    scoreBoard.textContent = `団長の合計スコア：${score}`;
    scoreImage.style.display = 'block';
    shareLinks.style.display = 'flex';
}

// 配列のシャッフル
const shuffleArray = (array) => {
    const cloneArray = [...array]
  
    for (let i = cloneArray.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        // 配列の要素の順番を入れ替える
        let tmpStorage = cloneArray[i]
        cloneArray[i] = cloneArray[rand]
        cloneArray[rand] = tmpStorage
    }
  
    return cloneArray
}

// quiz-formのスクリーンショットを撮る
function takeScreenshot(){
    html2canvas(document.querySelector("#quiz-form")).then(canvas =>{
        const link = document.createElement('a');
        link.download = 'gbf_quiz_result.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// X(Twitter)にプレイ結果をShareする
function shareTwitter(){
    const href = 'https://x.com/intent/tweet?text=';
    const text = encodeURIComponent(`${decodeURIComponent(document.title)}をやったよ！\n団長は${score}点獲得しました！\n#グラブルプロフィールクイズ\n`);
    const appUrl = `&url=` + encodeURIComponent(decodeURIComponent(location.href));
    const url = href + text + appUrl;
    window.open(url, "_blank");

}

// Misskeyにプレイ結果をShareする
function shareMisskey(){
    const href = 'https://misskeyshare.link/share.html?text=';
    const text = encodeURIComponent(`${decodeURIComponent(document.title)}をやったよ！\n団長は${score}点獲得しました！\n#グラブルプロフィールクイズ\n`);
    const appUrl = `&url=` + encodeURIComponent(decodeURIComponent(location.href));
    const url = href + text + appUrl;
    window.open(url);
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒
