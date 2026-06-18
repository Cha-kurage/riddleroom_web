document.addEventListener('DOMContentLoaded', () => {
    const hintsData = [
        {
            "stepName": "1st STEP",
            "puzzles": [
                {
                    "title": "亀がいる壁",
                    "hints": [
                        "左側には漢字と「鏡」、矢印の先には「亀」と「手紙」が置いてあります。",
                        "「かがみ」を上から文字として置いて漢字の読みと併せた時に「かめ」と「てがみ」になります。下の漢字は印を半分に割っていそうです。",
                        "答えは「いみん」です。"
                    ]
                },
                {
                    "title": "カブト虫がいる壁",
                    "hints": [
                        "壁に居るものをそれぞれマスに当てはまるように埋めてみましょう。",
                        "壁にあるのは「かぶとむし」、「すとっぷまーく」、「かざぐるま」です。",
                        "答えは「すざく」です。"
                    ]
                },
                {
                    "title": "ドアがある壁",
                    "hints": [
                        "「RIDDLE ROOM」の看板と数字に何か関係がありそうです。",
                        "右は「DOOR」になります。",
                        "「RIDDLEROOM」の何番目の文字かを数字で表していそうです。",
                        "答えは「らいど」です。"
                    ]
                },
                {
                    "title": "そこから先",
                    "hints": [
                        "指示では壁の謎を全て解けと言われてました。本当に壁の謎はその3つだけなのでしょうか？",
                        "壁は今見ている窓の所にもありました。しかし、一見その壁の内側は窓から見ることは当然出来ません。",
                        "亀のいる壁をよく見てみると鏡がありました。これで反射した壁を見て、もう1つの謎を解きましょう。",
                        "窓と緑の四角と青の四角に矢印が通っています。",
                        "緑の四角には「みどり」、青の四角には「あお」、窓には「とうめい」と当てはめることが出来そうです。",
                        "答えは「とりお」です。",
                        "頭文字の「い」「す」「ら」「と」を並び替えて単語にしましょう。",
                        "答えは「いらすと」です。"
                    ]
                }
            ]
        },
        {
            "stepName": "2nd STEP",
            "puzzles": [
                {
                    "title": "ラメの謎",
                    "hints": [
                        "緑が「ラメ」になりそうなアイテムを探しましょう。",
                        "手紙の緑の文字だけを拾うと「RAME」になっていました。",
                        "答えは「えと」です。"
                    ]
                },
                {
                    "title": "目の謎",
                    "hints": [
                        "「め」になりそうなアイテムを探しましょう。",
                        "緑の折り紙の折れ目と周りを線とすると漢字の「目」と読むことが出来そうです。",
                        "答えは「くち」です。"
                    ]
                },
                {
                    "title": "机の上の謎",
                    "hints": [
                        "まずは机の上にある物を確認しましょう。机の上にあるのは「書き初め」「焼き鳥」「麻縄」「とっくり」です。",
                        "「やり」「あわ」があることから最初と最後の文字を取っていそうです。",
                        "置くアイテムは「かめ」になります。",
                        "答えは「とり」です。"
                    ]
                },
                {
                    "title": "レストランの謎",
                    "hints": [
                        "まずは左側から法則を考えてみましょう。上のイラストは「レストラン」です。",
                        "「レスとラン」が「ヘソ」「ナン」になっています。",
                        "五十音表で指示された分だけ文字を動かせば良さそうです。",
                        "「きば」は指示の通りに動かすと「かぶ」になるのでアイテムは「かぶとむし」を使いそうです。",
                        "答えは「すり」です。"
                    ]
                },
                {
                    "title": "そこから先",
                    "hints": [
                        "頭文字は「え」「く」「す」「と」なので並べ替えて単語にしましょう。",
                        "答えは「くえすと」です。"
                    ]
                }
            ]
        },
        {
            "stepName": "3rd STEP",
            "puzzles": [
                {
                    "title": "3rd STEP の謎",
                    "hints": [
                        "今まで「最初」をどこかでみなかったでしょうか？",
                        "「最初」という文字は指示文の「答えの最初の文字を並び替えて単語にしろ」という指示文の中にありました。",
                        "では、この指示文の「最初」を「最後」に変える、つまり答えの最後の文字を並び替えてそれぞれ単語にしましょう。",
                        "それぞれの答えは「おんどく」「ちりとり」になります。",
                        "これらをそれぞれ送信すると「見えない所を見ろ」という指示が渡されます。今この部屋で見えてない所を探してみましょう。貴方達は1度見えない所を何かを使って見た経験があるはずです。",
                        "1stで壁の見えない謎を鏡に反射させて見たように、まだ見ていない机の裏を見ましょう。",
                        "最初と送ろうという指示がありますが、最初は最後にするので「最後」と送信しましょう。"
                    ]
                }
            ]
        },
        {
            "stepName": "LAST STEP",
            "puzzles": [
                {
                    "title": "前半",
                    "hints": [
                        "貰った謎によく注目してみましょう。この枠に見覚えがあるはずです。",
                        "これは2ndでアイテムを置くための枠でした。この枠に当てはまるアイテムを探しましょう。",
                        "この枠には「緑の折り紙」が当てはまりました。どうすればシオリミロが白になるか考えてみましょう。",
                        "置かれたアイテムを適用し、「み」取りの「おり」が「み」とすれば白になりそうです。ではこの大きな枠に当てはまる物を考えてみましょう。",
                        "ここには「RIDDLEROOM」その物が当てはまります。つまり「り」を取れば良さそうです。が、それだけでは足りません。",
                        "リドルルームの中に適用されそうなアイテムがあるはずです。",
                        "アイテムは6つです。"
                    ]
                },
                {
                    "title": "後半 (そこから先)",
                    "hints": [
                        "2ndで使った4つのアイテムと「焼き鳥」「鳥取」が適用出来そうです。",
                        "アイテムは6つですが、適用の仕方は緑の折り紙のように1つだけとは限りません。",
                        "てがみ、こ取り、かぶと無視、ビー取る、ター取る、消しゴム、み取り、おりがみのようにアイテムによって2つの適用の仕方がありました。やき取り、とっ取り含めて全て適用しましょう。",
                        "「麻縄の上」という指示があらわれました。早速麻縄の上を確認しましょう。",
                        "今は屋根を開けているため上には何もありませんが、本来そこにはライトがありました。ライトにオープンとあるので開けてみましょう。",
                        "そうすると「名取 悟」という書き初めの一部分が出てきました。",
                        "これもリドルルームの中にあり、な取りさ取ると考えられそうです。こちらも文に適用させましょう。",
                        "そうすると「泡の上」という指示文があらわれました。",
                        "泡は2ndで使った謎の中にありました。",
                        "アイテムの所には亀が入るのでその上を読むと、答えは「かめら」となります。"
                    ]
                }
            ]
        }
    ];

    const wrapper = document.getElementById('hints-wrapper');

    hintsData.forEach((stepGroup) => {
        // Create a wrapper for the step group
        const groupContainer = document.createElement('div');
        groupContainer.className = 'hint-step-group';

        // Add Step Title
        const groupTitle = document.createElement('h1');
        groupTitle.className = 'hint-group-title';
        groupTitle.textContent = stepGroup.stepName;
        groupTitle.style.marginTop = '3rem';
        groupTitle.style.marginBottom = '1.5rem';
        groupTitle.style.color = 'var(--text-main)';
        groupTitle.style.borderBottom = '3px solid var(--accent-blue)';
        groupTitle.style.paddingBottom = '0.5rem';
        groupContainer.appendChild(groupTitle);

        stepGroup.puzzles.forEach((puzzle) => {
            const card = document.createElement('div');
            card.className = 'hint-step-card';

            const title = document.createElement('h2');
            title.className = 'hint-step-title';
            title.textContent = puzzle.title;
            card.appendChild(title);

            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'hint-content-wrapper';

            const hintsList = [];
            puzzle.hints.forEach((hintText, hintIndex) => {
                const item = document.createElement('div');
                item.className = 'hint-item';
                // Initially hide ALL hints
                item.classList.add('hidden');
                
                const text = document.createElement('p');
                text.className = 'hint-text';
                text.innerHTML = '<strong>ヒント' + (hintIndex + 1) + '：</strong><br>' + hintText.replace(/\n/g, '<br>');
                item.appendChild(text);

                hintsList.push(item);
                contentWrapper.appendChild(item);
            });

            const btnWrapper = document.createElement('div');
            btnWrapper.className = 'hint-btn-wrapper';

            const btn = document.createElement('button');
            btn.className = 'next-hint-btn';
            
            let currentHintIndex = -1; // -1 means no hints are shown yet
            
            const updateButtonText = () => {
                if (currentHintIndex === -1) {
                    btn.textContent = 'ヒントを見る';
                } else if (currentHintIndex === puzzle.hints.length - 1) {
                    btn.classList.add('hidden'); // Hide button when all hints are shown
                } else if (currentHintIndex === puzzle.hints.length - 2) {
                    btn.textContent = '最後のヒントを見る';
                } else {
                    btn.textContent = '次のヒントを見る';
                }
            };

            updateButtonText();

            btn.addEventListener('click', () => {
                currentHintIndex++;
                if (currentHintIndex < puzzle.hints.length) {
                    hintsList[currentHintIndex].classList.remove('hidden');
                    updateButtonText();
                }
            });
            btnWrapper.appendChild(btn);

            contentWrapper.appendChild(btnWrapper);
            card.appendChild(contentWrapper);
            groupContainer.appendChild(card);
        });

        wrapper.appendChild(groupContainer);
    });
});
