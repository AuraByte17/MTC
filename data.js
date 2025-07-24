// --- DATA (Conteúdo completo com anatomia expandida) ---

// Exporta os dados sobre os tipos de Qi
export const qiData = [
    { title: 'Yuan Qi - Qi Original', content: 'A força motriz herdada dos pais, a base de toda a vitalidade. É a nossa constituição fundamental, armazenada nos Rins.' },
    { title: 'Gu Qi - Qi dos Alimentos', content: 'Energia extraída dos alimentos e bebidas pelo Baço e Estômago. A qualidade da nossa dieta determina a qualidade deste Qi.' },
    { title: 'Kong Qi - Qi do Ar', content: 'Energia extraída do ar que respiramos pelo Pulmão. A respiração profunda e consciente fortalece este Qi.' },
    { title: 'Zong Qi - Qi Peitoral', content: 'Combinação do Qi do Ar e dos Alimentos. Governa a respiração e a circulação do Sangue, e afeta a força da voz.' },
    { title: 'Ying Qi - Qi Nutritivo', content: 'Circula com o Sangue dentro dos vasos e meridianos para nutrir todo o corpo. É o Qi ativado pela acupuntura.' },
    { title: 'Wei Qi - Qi Defensivo', content: 'Circula na camada exterior do corpo, protegendo-o de fatores patogénicos externos (frio, vento, vírus). É o nosso sistema imunitário energético.' },
];

// Exporta os dados detalhados dos 12 Meridianos Principais
export const meridianData = [
    { 
        id: 'pulmao', name: 'Pulmão (P)', element: 'Metal', time: '03-05h', 
        functions: 'Governa o Qi e a Respiração, controla a descida e dispersão do Qi, regula as passagens da água e controla a pele. Abriga a Alma Corpórea (Po).', 
        imbalances: 'Tosse, falta de ar, asma, constipações frequentes, problemas de pele, alergias, tristeza.', color: 'metal',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Madeira', point: 'P11', functions: 'Reanima, limpa Calor do Pulmão, beneficia a garganta.'},
            { type: 'Ying-Spring (Nascente)', element: 'Fogo', point: 'P10', functions: 'Limpa Calor do Pulmão, beneficia a garganta.'},
            { type: 'Shu-Stream (Riacho)', element: 'Terra', point: 'P9', functions: 'Tonifica Qi e Yin do Pulmão, resolve Fleuma, influencia os vasos.'},
            { type: 'Jing-River (Rio)', element: 'Metal', point: 'P8', functions: 'Desce o Qi do Pulmão, pára tosse e pieira.'},
            { type: 'He-Sea (Mar)', element: 'Água', point: 'P5', functions: 'Limpa Calor do Pulmão, desce o Qi rebelde, regula as passagens da água.'}
        ],
        yuan_source: 'P9', luo_connecting: 'P7', xi_cleft: 'P6',
        points: [
            { id: 'P1', name: 'Zhongfu', character: '中府', pt_name: 'Palácio Central', functions: 'Ponto Mu do Pulmão. Dispersa Calor, regula o Qi do Pulmão, pára a tosse.'},
            { id: 'P2', name: 'Yunmen', character: '雲門', pt_name: 'Porta das Nuvens', functions: 'Limpa o Calor do Pulmão, dispersa a plenitude no peito.'},
            { id: 'P3', name: 'Tianfu', character: '天府', pt_name: 'Palácio Celestial', functions: 'Limpa o Calor do Pulmão, arrefece o Sangue, acalma a dor.'},
            { id: 'P4', name: 'Xiabai', character: '俠白', pt_name: 'Branco Protetor', functions: 'Regula o Qi e o Sangue no peito, alivia a dor no braço.'},
            { id: 'P5', name: 'Chize', character: '尺澤', pt_name: 'Pântano do Cúbito', functions: 'Limpa o Calor do Pulmão, desce o Qi rebelde, trata tosse.'},
            { id: 'P6', name: 'Kongzui', character: '孔最', pt_name: 'Abertura Máxima', functions: 'Ponto Xi-Fenda. Limpa Calor, humedece o Pulmão, pára sangramentos.'},
            { id: 'P7', name: 'Lieque', character: '列缺', pt_name: 'Brecha Sequencial', functions: 'Ponto Luo-Conexão. Liberta o exterior, promove a descida do Qi, beneficia a cabeça e nuca.'},
            { id: 'P8', name: 'Jingqu', character: '經渠', pt_name: 'Canal do Meridiano', functions: 'Desce o Qi do Pulmão, pára a tosse e a pieira.'},
            { id: 'P9', name: 'Taiyuan', character: '太淵', pt_name: 'Abismo Supremo', functions: 'Ponto Fonte. Tonifica o Qi e Yin do Pulmão, influencia os vasos sanguíneos.'},
            { id: 'P10', name: 'Yuji', character: '魚際', pt_name: 'Borda do Peixe', functions: 'Beneficia a garganta, limpa o Calor do Pulmão.'},
            { id: 'P11', name: 'Shaoshang', character: '少商', pt_name: 'Jovem Mercador', functions: 'Reanima, limpa o Calor, beneficia a garganta.'}
        ] 
    },
    { 
        id: 'intestino-grosso', name: 'Intestino Grosso (IG)', element: 'Metal', time: '05-07h', 
        functions: 'Recebe os resíduos, reabsorve fluidos e forma/expele as fezes. Ligado à capacidade de "largar".', 
        imbalances: 'Obstipação, diarreia, dor abdominal, dor de dentes, problemas de pele, rigidez no ombro.', color: 'metal',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Metal', point: 'IG1', functions: 'Limpa Calor, beneficia a garganta e os dentes.'},
            { type: 'Ying-Spring (Nascente)', element: 'Água', point: 'IG2', functions: 'Expele Vento, limpa Calor, reduz inchaço.'},
            { type: 'Shu-Stream (Riacho)', element: 'Madeira', point: 'IG3', functions: 'Beneficia a garganta e os dentes, expele Vento.'},
            { type: 'Jing-River (Rio)', element: 'Fogo', point: 'IG5', functions: 'Limpa Calor, beneficia o pulso, acalma o Shen.'},
            { type: 'He-Sea (Mar)', element: 'Terra', point: 'IG11', functions: 'Limpa Calor, arrefece o Sangue, resolve a Humidade, trata a pele.'}
        ],
        yuan_source: 'IG4', luo_connecting: 'IG6', xi_cleft: 'IG7',
        points: [
            { id: 'IG1', name: 'Shangyang', character: '商陽', pt_name: 'Mercador Yang', functions: 'Limpa Calor, reanima, trata dor de garganta e dentes.'},
            { id: 'IG2', name: 'Erjian', character: '二間', pt_name: 'Segundo Espaço', functions: 'Limpa Calor, reduz inchaço, alivia dor de dentes.'},
            { id: 'IG3', name: 'Sanjian', character: '三間', pt_name: 'Terceiro Espaço', functions: 'Limpa Calor, beneficia a garganta, trata diarreia.'},
            { id: 'IG4', name: 'Hegu', character: '合谷', pt_name: 'Vale da Junção', functions: 'Ponto Fonte. Ponto mestre da face e boca. Liberta o exterior, pára a dor.'},
            { id: 'IG5', name: 'Yangxi', character: '陽谿', pt_name: 'Correnteza Yang', functions: 'Limpa Calor, beneficia o pulso.'},
            { id: 'IG6', name: 'Pianli', character: '偏歷', pt_name: 'Passagem Inclinada', functions: 'Ponto Luo-Conexão. Regula as passagens da água, trata edema facial.'},
            { id: 'IG7', name: 'Wenliu', character: '溫溜', pt_name: 'Fluxo Quente', functions: 'Ponto Xi-Fenda. Limpa Calor e toxinas, modera condições agudas.'},
            { id: 'IG8', name: 'Xialian', character: '下廉', pt_name: 'Canto Inferior', functions: 'Harmoniza o Intestino, trata dor no braço.'},
            { id: 'IG9', name: 'Shanglian', character: '上廉', pt_name: 'Canto Superior', functions: 'Ativa o meridiano, alivia a dor e dormência no braço.'},
            { id: 'IG10', name: 'Shousanli', character: '手三里', pt_name: 'Três Li do Braço', functions: 'Regula o Qi e Sangue, ativa o meridiano, trata dor no ombro e braço.'},
            { id: 'IG11', name: 'Quchi', character: '曲池', pt_name: 'Lagoa Sinuosa', functions: 'Limpa Calor, arrefece o Sangue, expele Vento, trata problemas de pele.'},
            { id: 'IG12', name: 'Zhouliao', character: '肘髎', pt_name: 'Fissura do Cotovelo', functions: 'Ativa o meridiano, beneficia o cotovelo.'},
            { id: 'IG13', name: 'Shouwuli', character: '手五里', pt_name: 'Cinco Li do Braço', functions: 'Ativa o meridiano, trata dor no braço.'},
            { id: 'IG14', name: 'Binao', character: '臂臑', pt_name: 'Músculo do Braço', functions: 'Beneficia o ombro e o braço, beneficia os olhos.'},
            { id: 'IG15', name: 'Jianyu', character: '肩髃', pt_name: 'Osso do Ombro', functions: 'Beneficia o ombro, expele Vento-Humidade.'},
            { id: 'IG16', name: 'Jugu', character: '巨骨', pt_name: 'Grande Osso', functions: 'Beneficia o ombro, trata dor e incapacidade de levantar o braço.'},
            { id: 'IG17', name: 'Tianding', character: '天鼎', pt_name: 'Caldeirão Celestial', functions: 'Beneficia a garganta e a voz.'},
            { id: 'IG18', name: 'Futu', character: '扶突', pt_name: 'Suporte da Protuberância', functions: 'Beneficia a garganta, alivia tosse e pieira.'},
            { id: 'IG19', name: 'Kouheliao', character: '口禾髎', pt_name: 'Fissura do Grão da Boca', functions: 'Abre as passagens nasais.'},
            { id: 'IG20', name: 'Yingxiang', character: '迎香', pt_name: 'Acolher a Fragrância', functions: 'Abre as passagens nasais, trata congestão, sinusite e rinite.'}
        ]
    },
    {
        id: 'estomago', name: 'Estômago (E)', element: 'Terra', time: '07-09h',
        functions: 'Controla a "maturação e decomposição" dos alimentos, sendo a origem de todos os fluidos. O seu Qi deve descer.',
        imbalances: 'Azia, refluxo, indigestão, náuseas, dor de estômago, mau hálito, preocupação excessiva.', color: 'earth',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Metal', point: 'E45', functions: 'Limpa Calor do Estômago, acalma o Shen, reanima.'},
            { type: 'Ying-Spring (Nascente)', element: 'Água', point: 'E44', functions: 'Limpa Calor do Estômago, trata dor de dentes e garganta.'},
            { type: 'Shu-Stream (Riacho)', element: 'Madeira', point: 'E43', functions: 'Harmoniza o Estômago, resolve Humidade.'},
            { type: 'Jing-River (Rio)', element: 'Fogo', point: 'E41', functions: 'Limpa Calor, beneficia o tornozelo, acalma o Shen.'},
            { type: 'He-Sea (Mar)', element: 'Terra', point: 'E36', functions: 'Ponto mestre do abdómen, tonifica Qi e Sangue, fortalece o corpo.'}
        ],
        yuan_source: 'E42', luo_connecting: 'E40', xi_cleft: 'E34',
        points: [
            { id: 'E1', name: 'Chengqi', character: '承泣', pt_name: 'Recipiente das Lágrimas', functions: 'Beneficia os olhos, expele Vento, limpa Calor.'},
            { id: 'E2', name: 'Sibai', character: '四白', pt_name: 'Quatro Brancuras', functions: 'Beneficia os olhos, trata tiques faciais.'},
            { id: 'E3', name: 'Juliao', character: '巨髎', pt_name: 'Grande Fissura', functions: 'Expele Vento, trata dor de dentes e paralisia facial.'},
            { id: 'E4', name: 'Dicang', character: '地倉', pt_name: 'Celeiro da Terra', functions: 'Trata paralisia facial e salivação excessiva.'},
            { id: 'E5', name: 'Daying', character: '大迎', pt_name: 'Grande Acolhimento', functions: 'Trata dor de dentes e inchaço na bochecha.'},
            { id: 'E6', name: 'Jiache', character: '頰車', pt_name: 'Carruagem da Bochecha', functions: 'Trata problemas da mandíbula (bruxismo, dor).'},
            { id: 'E7', name: 'Xiaguan', character: '下關', pt_name: 'Barreira Inferior', functions: 'Beneficia os ouvidos e a mandíbula, trata zumbido e dor de dentes.'},
            { id: 'E8', name: 'Touwei', character: '頭維', pt_name: 'Suporte da Cabeça', functions: 'Trata dores de cabeça frontais e enxaquecas.'},
            { id: 'E9', name: 'Renying', character: '人迎', pt_name: 'Acolhimento Humano', functions: 'Regula o Qi e o Sangue, beneficia a garganta.'},
            { id: 'E10', name: 'Shuitu', character: '水突', pt_name: 'Protuberância da Água', functions: 'Beneficia a garganta e a voz.'},
            { id: 'E11', name: 'Qishe', character: '氣舍', pt_name: 'Morada do Qi', functions: 'Beneficia a garganta, trata pieira.'},
            { id: 'E12', name: 'Quepen', character: '缺盆', pt_name: 'Bacia Vazia', functions: 'Faz descer o Qi do Pulmão, ativa o meridiano.'},
            { id: 'E13', name: 'Qihu', character: '氣戶', pt_name: 'Porta do Qi', functions: 'Desce o Qi rebelde, trata tosse e dor no peito.'},
            { id: 'E14', name: 'Kufang', character: '庫房', pt_name: 'Armazém', functions: 'Alivia a tosse e a dor no peito.'},
            { id: 'E15', name: 'Wuyi', character: '屋翳', pt_name: 'Tela do Quarto', functions: 'Trata dor no peito e distensão mamária.'},
            { id: 'E16', name: 'Yingchuang', character: '膺窗', pt_name: 'Janela do Peito', functions: 'Trata tosse, pieira e dor no peito.'},
            { id: 'E17', name: 'Ruzhong', character: '乳中', pt_name: 'Centro do Mamilo', functions: 'Ponto de localização (não se agulha ou moxa).'},
            { id: 'E18', name: 'Rugen', character: '乳根', pt_name: 'Raiz do Mamilo', functions: 'Beneficia os seios, trata mastite e falta de lactação.'},
            { id: 'E19', name: 'Burong', character: '不容', pt_name: 'Não Contido', functions: 'Harmoniza o Estômago, trata dor gástrica e vómitos.'},
            { id: 'E20', name: 'Chengman', character: '承滿', pt_name: 'Suporte da Plenitude', functions: 'Harmoniza o Aquecedor Médio.'},
            { id: 'E21', name: 'Liangmen', character: '梁門', pt_name: 'Porta da Viga', functions: 'Regula o Qi do Estômago, trata dor abdominal.'},
            { id: 'E22', name: 'Guanmen', character: '關門', pt_name: 'Porta da Barreira', functions: 'Regula os intestinos, trata dor abdominal e diarreia.'},
            { id: 'E23', name: 'Taiyi', character: '太乙', pt_name: 'Unidade Suprema', functions: 'Acalma o Shen, harmoniza o Estômago.'},
            { id: 'E24', name: 'Huaroumen', character: '滑肉門', pt_name: 'Porta da Carne Escorregadia', functions: 'Harmoniza o Estômago, transforma a Fleuma.'},
            { id: 'E25', name: 'Tianshu', character: '天樞', pt_name: 'Pivô Celestial', functions: 'Ponto Mu do Intestino Grosso. Regula os intestinos, trata diarreia e obstipação.'},
            { id: 'E26', name: 'Wailing', character: '外陵', pt_name: 'Monte Exterior', functions: 'Regula o Qi, alivia a dor abdominal.'},
            { id: 'E27', name: 'Daju', character: '大巨', pt_name: 'Grande Gigante', functions: 'Tonifica o Rim, consolida a Essência.'},
            { id: 'E28', name: 'Shuidao', character: '水道', pt_name: 'Caminho da Água', functions: 'Regula as passagens da água, trata edema e problemas urinários.'},
            { id: 'E29', name: 'Guilai', character: '歸來', pt_name: 'Regresso', functions: 'Aquece o útero, trata problemas menstruais e infertilidade.'},
            { id: 'E30', name: 'Qichong', character: '氣沖', pt_name: 'Impulso do Qi', functions: 'Regula o Qi e o Sangue na pélvis.'},
            { id: 'E31', name: 'Biguan', character: '髀關', pt_name: 'Barreira da Coxa', functions: 'Trata dor e atrofia na coxa e perna.'},
            { id: 'E32', name: 'Futu', character: '伏兔', pt_name: 'Lebre Agachada', functions: 'Ativa o meridiano, trata dor e fraqueza na perna.'},
            { id: 'E33', name: 'Yinshi', character: '陰市', pt_name: 'Mercado Yin', functions: 'Trata dor e dormência no joelho e perna.'},
            { id: 'E34', name: 'Liangqiu', character: '梁丘', pt_name: 'Monte da Viga', functions: 'Ponto Xi-Fenda. Harmoniza o Estômago, trata dor gástrica aguda.'},
            { id: 'E35', name: 'Dubi', character: '犢鼻', pt_name: 'Nariz do Bezerro', functions: 'Ponto do joelho. Beneficia o joelho, trata dor e inchaço.'},
            { id: 'E36', name: 'Zusanli', character: '足三里', pt_name: 'Três Li da Perna', functions: 'Tonifica o Qi e o Sangue, fortalece o corpo, harmoniza o Estômago.'},
            { id: 'E37', name: 'Shangjuxu', character: '上巨虛', pt_name: 'Grande Vazio Superior', functions: 'Ponto He-Mar Inferior do IG. Regula os intestinos.'},
            { id: 'E38', name: 'Tiaokou', character: '條口', pt_name: 'Abertura Estreita', functions: 'Beneficia o ombro, trata dor no ombro e perna.'},
            { id: 'E39', name: 'Xiajuxu', character: '下巨虛', pt_name: 'Grande Vazio Inferior', functions: 'Ponto He-Mar Inferior do ID. Limpa Humidade-Calor.'},
            { id: 'E40', name: 'Fenglong', character: '豐隆', pt_name: 'Abundância Próspera', functions: 'Ponto Luo-Conexão. Transforma a Fleuma (visível e invisível) em todo o corpo.'},
            { id: 'E41', name: 'Jiexi', character: '解谿', pt_name: 'Correnteza Desatada', functions: 'Limpa Calor do Estômago, beneficia o tornozelo.'},
            { id: 'E42', name: 'Chongyang', character: '沖陽', pt_name: 'Impulso Yang', functions: 'Ponto Fonte. Harmoniza o Estômago, acalma o Shen.'},
            { id: 'E43', name: 'Xiangu', character: '陷谷', pt_name: 'Vale Submerso', functions: 'Regula o Baço e o Estômago, trata edema facial.'},
            { id: 'E44', name: 'Neiting', character: '內庭', pt_name: 'Pátio Interior', functions: 'Limpa o Calor do Estômago, trata dor de dentes e hemorragias nasais.'},
            { id: 'E45', name: 'Lidui', character: '厲兌', pt_name: 'Troca Severa', functions: 'Limpa Calor, trata insónia, pesadelos e febre.'}
        ]
    },
    {
        id: 'baco', name: 'Baço (BP)', element: 'Terra', time: '09-11h',
        functions: 'Governa a transformação e o transporte. Controla o Sangue nos vasos, os músculos e os quatro membros. Abriga o Pensamento (Yi).',
        imbalances: 'Cansaço, inchaço abdominal, fezes moles, falta de apetite, hematomas, prolapsos.', color: 'earth',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Madeira', point: 'BP1', functions: 'Pára sangramentos, acalma o Shen, regula o Baço.'},
            { type: 'Ying-Spring (Nascente)', element: 'Fogo', point: 'BP2', functions: 'Limpa Calor, harmoniza o Baço, pára sangramentos.'},
            { type: 'Shu-Stream (Riacho)', element: 'Terra', point: 'BP3', functions: 'Tonifica o Baço, resolve Humidade e Fleuma.'},
            { type: 'Jing-River (Rio)', element: 'Metal', point: 'BP5', functions: 'Fortalece o Baço, resolve Humidade, beneficia os tendões.'},
            { type: 'He-Sea (Mar)', element: 'Água', point: 'BP9', functions: 'Principal ponto para resolver Humidade, trata edema e diarreia.'}
        ],
        yuan_source: 'BP3', luo_connecting: 'BP4', xi_cleft: 'BP8',
        points: [
            { id: 'BP1', name: 'Yinbai', character: '隱白', pt_name: 'Branco Oculto', functions: 'Pára sangramentos, regula o Baço, acalma o Shen.'},
            { id: 'BP2', name: 'Dadu', character: '大都', pt_name: 'Grande Metrópole', functions: 'Limpa Calor, trata plenitude abdominal.'},
            { id: 'BP3', name: 'Taibai', character: '太白', pt_name: 'Branco Supremo', functions: 'Ponto Fonte. Tonifica o Baço, resolve Humidade.'},
            { id: 'BP4', name: 'Gongsun', character: '公孫', pt_name: 'Neto do Duque', functions: 'Ponto Luo-Conexão. Harmoniza o Estômago e o Baço, regula o Chong Mai.'},
            { id: 'BP5', name: 'Shangqiu', character: '商丘', pt_name: 'Monte do Mercador', functions: 'Fortalece o Baço, trata dor no tornozelo.'},
            { id: 'BP6', name: 'Sanyinjiao', character: '三陰交', pt_name: 'Cruzamento dos Três Yin', functions: 'Ponto de encontro dos 3 Yin. Tonifica Baço, Fígado e Rim. Trata problemas digestivos, ginecológicos e urinários.'},
            { id: 'BP7', name: 'Lougu', character: '漏谷', pt_name: 'Vale Infiltrado', functions: 'Fortalece o Baço, resolve Humidade.'},
            { id: 'BP8', name: 'Diji', character: '地機', pt_name: 'Motriz da Terra', functions: 'Ponto Xi-Fenda. Regula a menstruação, move o Sangue, trata dismenorreia.'},
            { id: 'BP9', name: 'Yinlingquan', character: '陰陵泉', pt_name: 'Fonte da Colina Yin', functions: 'Resolve a Humidade, trata edema, diarreia e dor no joelho.'},
            { id: 'BP10', name: 'Xuehai', character: '血海', pt_name: 'Mar de Sangue', functions: '"Mar de Sangue". Move e arrefece o Sangue, trata problemas de pele e menstruais.'},
            { id: 'BP11', name: 'Jimen', character: '箕門', pt_name: 'Porta da Peneira', functions: 'Trata problemas urinários e dor na coxa.'},
            { id: 'BP12', name: 'Chongmen', character: '沖門', pt_name: 'Porta do Impulso', functions: 'Regula o Qi na zona inguinal.'},
            { id: 'BP13', name: 'Fushe', character: '府舍', pt_name: 'Morada da Víscera', functions: 'Trata dor abdominal e hérnias.'},
            { id: 'BP14', name: 'Fujie', character: '腹結', pt_name: 'Nó do Abdómen', functions: 'Aquece o centro, trata diarreia com dor.'},
            { id: 'BP15', name: 'Daheng', character: '大橫', pt_name: 'Grande Horizontal', functions: 'Move o Qi e o Sangue no abdómen, trata obstipação.'},
            { id: 'BP16', name: 'Fuai', character: '腹哀', pt_name: 'Lamento do Abdómen', functions: 'Trata dor abdominal e indigestão.'},
            { id: 'BP17', name: 'Shidou', character: '食竇', pt_name: 'Cavidade da Comida', functions: 'Alivia a dor no hipocôndrio.'},
            { id: 'BP18', name: 'Tianxi', character: '天谿', pt_name: 'Correnteza Celestial', functions: 'Beneficia os seios e alivia a tosse.'},
            { id: 'BP19', name: 'Xiongxiang', character: '胸鄉', pt_name: 'Região do Peito', functions: 'Trata dor no peito e hipocôndrio.'},
            { id: 'BP20', name: 'Zhourong', character: '周榮', pt_name: 'Glória Circundante', functions: 'Regula o Qi do Pulmão, trata tosse e plenitude torácica.'},
            { id: 'BP21', name: 'Dabao', character: '大包', pt_name: 'Grande Envoltório', functions: 'Grande Luo do Baço. Regula o Qi e o Sangue, firma os tendões e articulações.'}
        ]
    },
    {
        id: 'coracao', name: 'Coração (C)', element: 'Fogo', time: '11-13h',
        functions: 'Governa o Sangue e os vasos. Abriga a Mente/Espírito (Shen). Controla a transpiração.',
        imbalances: 'Palpitações, insónia, ansiedade, agitação mental, memória fraca, pânico.', color: 'fire',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Madeira', point: 'C9', functions: 'Reanima, limpa o Calor do Coração, acalma o Vento.'},
            { type: 'Ying-Spring (Nascente)', element: 'Fogo', point: 'C8', functions: 'Limpa o Fogo do Coração, acalma o Shen, trata úlceras na boca.'},
            { type: 'Shu-Stream (Riacho)', element: 'Terra', point: 'C7', functions: 'Acalma o Shen, nutre o Sangue do Coração, trata insónia e ansiedade.'},
            { type: 'Jing-River (Rio)', element: 'Metal', point: 'C4', functions: 'Tonifica o Qi e o Yin do Coração, acalma o Shen, beneficia a voz.'},
            { type: 'He-Sea (Mar)', element: 'Água', point: 'C3', functions: 'Transforma a Fleuma, acalma o Shen, arrefece o Sangue.'}
        ],
        yuan_source: 'C7', luo_connecting: 'C5', xi_cleft: 'C6',
        points: [
            { id: 'C1', name: 'Jiquan', character: '極泉', pt_name: 'Fonte Suprema', functions: 'Ativa o Qi e Sangue no peito, trata dor no coração e braço.'},
            { id: 'C2', name: 'Qingling', character: '青靈', pt_name: 'Espírito Verde-Azul', functions: 'Alivia a dor no ombro e braço.'},
            { id: 'C3', name: 'Shaohai', character: '少海', pt_name: 'Mar Menor', functions: 'Acalma o Shen, transforma a Fleuma-Calor, trata dor no cotovelo.'},
            { id: 'C4', name: 'Lingdao', character: '靈道', pt_name: 'Caminho do Espírito', functions: 'Acalma o Shen, beneficia a voz, relaxa os tendões.'},
            { id: 'C5', name: 'Tongli', character: '通里', pt_name: 'Comunicação Interior', functions: 'Ponto Luo-Conexão. Acalma o Shen, regula o ritmo cardíaco.'},
            { id: 'C6', name: 'Yinxi', character: '陰郄', pt_name: 'Fenda do Yin', functions: 'Ponto Xi-Fenda. Limpa Calor por Deficiência, trata suores noturnos.'},
            { id: 'C7', name: 'Shenmen', character: '神門', pt_name: 'Porta do Espírito', functions: 'Ponto Fonte. Principal ponto para acalmar o Shen, trata insónia, ansiedade, pânico.'},
            { id: 'C8', name: 'Shaofu', character: '少府', pt_name: 'Palácio Menor', functions: 'Limpa o Fogo do Coração e do Intestino Delgado, trata problemas urinários.'},
            { id: 'C9', name: 'Shaochong', character: '少沖', pt_name: 'Impulso Menor', functions: 'Reanima, limpa o Calor do Coração, trata febre alta e coma.'}
        ]
    },
    {
        id: 'intestino-delgado', name: 'Intestino Delgado (ID)', element: 'Fogo', time: '13-15h',
        functions: 'Controla a receção e transformação, separando o "puro" do "impuro". Ajuda na clareza de julgamento.',
        imbalances: 'Dor abdominal, inchaço, problemas urinários, indecisão, confusão mental.', color: 'fire',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Metal', point: 'ID1', functions: 'Promove a lactação, limpa Calor, beneficia a garganta.'},
            { type: 'Ying-Spring (Nascente)', element: 'Água', point: 'ID2', functions: 'Expele Vento-Calor, trata dor de garganta e febre.'},
            { type: 'Shu-Stream (Riacho)', element: 'Madeira', point: 'ID3', functions: 'Beneficia a coluna e nuca, expele Vento, trata dor de cabeça occipital.'},
            { type: 'Jing-River (Rio)', element: 'Fogo', point: 'ID5', functions: 'Limpa Calor, acalma o Shen, reduz inchaço.'},
            { type: 'He-Sea (Mar)', element: 'Terra', point: 'ID8', functions: 'Limpa Calor e Humidade-Calor, trata dor no cotovelo e ombro.'}
        ],
        yuan_source: 'ID4', luo_connecting: 'ID7', xi_cleft: 'ID6',
        points: [
            { id: 'ID1', name: 'Shaoze', character: '少澤', pt_name: 'Pântano Menor', functions: 'Promove a lactação, limpa Calor, reanima.'},
            { id: 'ID2', name: 'Qiangu', character: '前谷', pt_name: 'Vale Frontal', functions: 'Limpa Calor, trata zumbido e dor de garganta.'},
            { id: 'ID3', name: 'Houxi', character: '後谿', pt_name: 'Correnteza Posterior', functions: 'Ponto mestre do Vaso Governador. Trata dor e rigidez na coluna e pescoço.'},
            { id: 'ID4', name: 'Wangu', character: '腕骨', pt_name: 'Osso do Pulso', functions: 'Ponto Fonte. Resolve a Humidade-Calor, trata icterícia.'},
            { id: 'ID5', name: 'Yanggu', character: '陽谷', pt_name: 'Vale Yang', functions: 'Limpa Calor, trata dor no pulso e inchaço na bochecha.'},
            { id: 'ID6', name: 'Yanglao', character: '養老', pt_name: 'Nutrir os Velhos', functions: 'Ponto Xi-Fenda. Beneficia os olhos, relaxa os tendões, trata dor aguda nas costas.'},
            { id: 'ID7', name: 'Zhizheng', character: '支正', pt_name: 'Ramo Principal', functions: 'Ponto Luo-Conexão. Acalma o Shen, liberta o exterior.'},
            { id: 'ID8', name: 'Xiaohai', character: '小海', pt_name: 'Mar Pequeno', functions: 'Trata dor no cotovelo, ombro e pescoço.'},
            { id: 'ID9', name: 'Jianzhen', character: '肩貞', pt_name: 'Ombro Reto', functions: 'Beneficia o ombro e o braço.'},
            { id: 'ID10', name: 'Naoshu', character: '臑俞', pt_name: 'Ponto Shu do Braço', functions: 'Beneficia o ombro, trata dor e fraqueza.'},
            { id: 'ID11', name: 'Tianzong', character: '天宗', pt_name: 'Ancestral Celestial', functions: 'Move o Qi e o Sangue, beneficia os seios, trata dor no ombro e escápula.'},
            { id: 'ID12', name: 'Bingfeng', character: '秉風', pt_name: 'Segurar o Vento', functions: 'Trata dor no ombro.'},
            { id: 'ID13', name: 'Quyuan', character: '曲垣', pt_name: 'Muro Curvo', functions: 'Alivia a dor e rigidez na escápula.'},
            { id: 'ID14', name: 'Jianwaishu', character: '肩外俞', pt_name: 'Ponto Shu Exterior do Ombro', functions: 'Expele Vento-Frio, trata dor no ombro e pescoço.'},
            { id: 'ID15', name: 'Jianzhongshu', character: '肩中俞', pt_name: 'Ponto Shu Central do Ombro', functions: 'Desce o Qi do Pulmão, trata tosse.'},
            { id: 'ID16', name: 'Tianchuang', character: '天窗', pt_name: 'Janela Celestial', functions: 'Beneficia os ouvidos e a garganta, trata zumbido e surdez.'},
            { id: 'ID17', name: 'Tianrong', character: '天容', pt_name: 'Aparência Celestial', functions: 'Beneficia a garganta, trata inchaço no pescoço.'},
            { id: 'ID18', name: 'Quanliao', character: '顴髎', pt_name: 'Fissura Zigomática', functions: 'Expele Vento, trata paralisia facial e dor de dentes.'},
            { id: 'ID19', name: 'Tinggong', character: '聽宮', pt_name: 'Palácio da Audição', functions: 'Beneficia os ouvidos, trata zumbido, surdez e dor de ouvido.'}
        ]
    },
    {
        id: 'bexiga', name: 'Bexiga (B)', element: 'Água', time: '15-17h',
        functions: 'Armazena e excreta a urina. O meridiano mais longo, impacta o sistema nervoso autónomo (pontos Shu das Costas).',
        imbalances: 'Problemas urinários, dor nas costas, dor de cabeça occipital, ciática, medo.', color: 'water',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Metal', point: 'B67', functions: 'Corrige a posição do feto, expele Vento, limpa a cabeça e os olhos.'},
            { type: 'Ying-Spring (Nascente)', element: 'Água', point: 'B66', functions: 'Limpa o Calor da cabeça.'},
            { type: 'Shu-Stream (Riacho)', element: 'Madeira', point: 'B65', functions: 'Expele Vento, limpa a cabeça e os olhos, trata dor de cabeça e rigidez no pescoço.'},
            { type: 'Jing-River (Rio)', element: 'Fogo', point: 'B60', functions: 'Principal ponto para dor em toda a coluna, relaxa os tendões, promove o parto.'},
            { type: 'He-Sea (Mar)', element: 'Terra', point: 'B40', functions: 'Ponto mestre das costas e lombar. Trata dor lombar aguda, ciática, problemas de pele.'}
        ],
        yuan_source: 'B64', luo_connecting: 'B58', xi_cleft: 'B63',
        points: [
            { id: 'B1', name: 'Jingming', character: '睛明', pt_name: 'Brilho do Olho', functions: 'Beneficia os olhos, trata todos os problemas oculares.'},
            { id: 'B2', name: 'Zanzhu', character: '攢竹', pt_name: 'Bambu Reunido', functions: 'Beneficia os olhos, trata dor de cabeça frontal.'},
            { id: 'B3', name: 'Meichong', character: '眉衝', pt_name: 'Impulso da Sobrancelha', functions: 'Trata dor de cabeça e congestão nasal.'},
            { id: 'B4', name: 'Quchai', character: '曲差', pt_name: 'Curva Divergente', functions: 'Limpa a cabeça, beneficia o nariz.'},
            { id: 'B5', name: 'Wuchu', character: '五處', pt_name: 'Quinto Lugar', functions: 'Trata dor de cabeça e tonturas.'},
            { id: 'B6', name: 'Chengguang', character: '承光', pt_name: 'Receber a Luz', functions: 'Beneficia os olhos e o nariz.'},
            { id: 'B7', name: 'Tongtian', character: '通天', pt_name: 'Conexão Celestial', functions: 'Beneficia o nariz, trata congestão e hemorragia nasal.'},
            { id: 'B8', name: 'Luoque', character: '絡卻', pt_name: 'Declínio da Conexão', functions: 'Acalma o Vento, beneficia os ouvidos.'},
            { id: 'B9', name: 'Yuzhen', character: '玉枕', pt_name: 'Almofada de Jade', functions: 'Trata dor de cabeça occipital e dor nos olhos.'},
            { id: 'B10', name: 'Tianzhu', character: '天柱', pt_name: 'Pilar Celestial', functions: 'Trata rigidez no pescoço, dor de cabeça occipital, beneficia a coluna.'},
            { id: 'B11', name: 'Dazhu', character: '大杼', pt_name: 'Grande Lançadeira', functions: 'Ponto de Influência dos Ossos. Beneficia os ossos e articulações.'},
            { id: 'B12', name: 'Fengmen', character: '風門', pt_name: 'Porta do Vento', functions: '"Porta do Vento". Liberta o exterior, expele Vento.'},
            { id: 'B13', name: 'Feishu', character: '肺俞', pt_name: 'Ponto Shu do Pulmão', functions: 'Ponto Shu das Costas do Pulmão. Tonifica e regula o Pulmão.'},
            { id: 'B14', name: 'Jueyinshu', character: '厥陰俞', pt_name: 'Ponto Shu do Jueyin (Pericárdio)', functions: 'Ponto Shu das Costas do Pericárdio. Regula o Coração.'},
            { id: 'B15', name: 'Xinshu', character: '心俞', pt_name: 'Ponto Shu do Coração', functions: 'Ponto Shu das Costas do Coração. Tonifica e regula o Coração, acalma o Shen.'},
            { id: 'B16', name: 'Dushu', character: '督俞', pt_name: 'Ponto Shu do Vaso Governador', functions: 'Ponto Shu das Costas do Vaso Governador. Regula o Qi no peito.'},
            { id: 'B17', name: 'Geshu', character: '膈俞', pt_name: 'Ponto Shu do Diafragma', functions: 'Ponto de Influência do Sangue. Nutre e move o Sangue.'},
            { id: 'B18', name: 'Ganshu', character: '肝俞', pt_name: 'Ponto Shu do Fígado', functions: 'Ponto Shu das Costas do Fígado. Regula o Fígado, move o Qi.'},
            { id: 'B19', name: 'Danshu', character: '膽俞', pt_name: 'Ponto Shu da Vesícula Biliar', functions: 'Ponto Shu das Costas da Vesícula Biliar. Limpa Humidade-Calor.'},
            { id: 'B20', name: 'Pishu', character: '脾俞', pt_name: 'Ponto Shu do Baço', functions: 'Ponto Shu das Costas do Baço. Tonifica o Baço e o Estômago.'},
            { id: 'B21', name: 'Weishu', character: '胃俞', pt_name: 'Ponto Shu do Estômago', functions: 'Ponto Shu das Costas do Estômago. Harmoniza o Estômago.'},
            { id: 'B22', name: 'Sanjiaoshu', character: '三焦俞', pt_name: 'Ponto Shu do Triplo Aquecedor', functions: 'Ponto Shu das Costas do Triplo Aquecedor. Regula as passagens da água.'},
            { id: 'B23', name: 'Shenshu', character: '腎俞', pt_name: 'Ponto Shu do Rim', functions: 'Ponto Shu das Costas do Rim. Tonifica o Rim (Yin, Yang, Jing, Qi).'},
            { id: 'B24', name: 'Qihaishu', character: '氣海俞', pt_name: 'Ponto Shu do Mar de Qi', functions: 'Fortalece a lombar, trata dor lombar.'},
            { id: 'B25', name: 'Dachangshu', character: '大腸俞', pt_name: 'Ponto Shu do Intestino Grosso', functions: 'Ponto Shu das Costas do Intestino Grosso. Regula os intestinos.'},
            { id: 'B26', name: 'Guanyuanshu', character: '關元俞', pt_name: 'Ponto Shu da Barreira Original', functions: 'Fortalece a lombar e o Rim.'},
            { id: 'B27', name: 'Xiaochangshu', character: '小腸俞', pt_name: 'Ponto Shu do Intestino Delgado', functions: 'Ponto Shu das Costas do Intestino Delgado. Limpa Humidade-Calor.'},
            { id: 'B28', name: 'Pangguangshu', character: '膀胱俞', pt_name: 'Ponto Shu da Bexiga', functions: 'Ponto Shu das Costas da Bexiga. Regula a Bexiga.'},
            { id: 'B29', name: 'Zhonglushu', character: '中膂俞', pt_name: 'Ponto Shu do Meio da Coluna', functions: 'Fortalece a coluna lombar.'},
            { id: 'B30', name: 'Baihuanshu', character: '白環俞', pt_name: 'Ponto Shu do Anel Branco', functions: 'Regula a menstruação, trata problemas genitais.'},
            { id: 'B31', name: 'Shangliao', character: '上髎', pt_name: 'Fissura Superior', functions: 'Regula o Aquecedor Inferior, trata problemas ginecológicos.'},
            { id: 'B32', name: 'Ciliao', character: '次髎', pt_name: 'Segunda Fissura', functions: 'Principal ponto para problemas ginecológicos e dor ciática.'},
            { id: 'B33', name: 'Zhongliao', character: '中髎', pt_name: 'Fissura Média', functions: 'Trata dor lombar e problemas urinários.'},
            { id: 'B34', name: 'Xialiao', character: '下髎', pt_name: 'Fissura Inferior', functions: 'Trata dor na zona sagrada e problemas genitais.'},
            { id: 'B35', name: 'Huiyang', character: '會陽', pt_name: 'Encontro do Yang', functions: 'Trata hemorróidas e diarreia.'},
            { id: 'B36', name: 'Chengfu', character: '承扶', pt_name: 'Suporte e Apoio', functions: 'Trata dor ciática e hemorróidas.'},
            { id: 'B37', name: 'Yinmen', character: '殷門', pt_name: 'Porta da Abundância', functions: 'Trata dor ciática e dor na coxa.'},
            { id: 'B38', name: 'Fuxi', character: '浮郄', pt_name: 'Fenda Flutuante', functions: 'Relaxa os tendões, trata cãibras na perna.'},
            { id: 'B39', name: 'Weiyang', character: '委陽', pt_name: 'Curva Yang', functions: 'Ponto He-Mar Inferior do TA. Regula as passagens da água.'},
            { id: 'B40', name: 'Weizhong', character: '委中', pt_name: 'Curva Central', functions: 'Ponto mestre das costas. Trata dor lombar aguda.'},
            { id: 'B41', name: 'Fufen', character: '附分', pt_name: 'Ramo Anexo', functions: 'Expele Vento-Frio, trata rigidez no pescoço.'},
            { id: 'B42', name: 'Pohu', character: '魄戶', pt_name: 'Porta da Alma Corpórea', functions: 'Nutre o Yin do Pulmão.'},
            { id: 'B43', name: 'Gaohuang', character: '膏肓', pt_name: 'Região Vital', functions: 'Tonifica potentemente o Qi e o Yin, trata doenças crónicas.'},
            { id: 'B44', name: 'Shentang', character: '神堂', pt_name: 'Salão do Espírito', functions: 'Acalma o Shen, regula o Qi do Coração.'},
            { id: 'B45', name: 'Yixi', character: '譩譆', pt_name: 'Som de Suspiro', functions: 'Expele Vento, alivia a tosse.'},
            { id: 'B46', name: 'Geguan', character: '膈關', pt_name: 'Barreira do Diafragma', functions: 'Regula o diafragma, trata vómitos e soluços.'},
            { id: 'B47', name: 'Hunmen', character: '魂門', pt_name: 'Porta da Alma Etérea', functions: 'Acalma o Hun (Alma Etérea), regula o Fígado.'},
            { id: 'B48', name: 'Yanggang', character: '陽綱', pt_name: 'Princípio do Yang', functions: 'Harmoniza a Vesícula Biliar e o Estômago.'},
            { id: 'B49', name: 'Yishe', character: '意舍', pt_name: 'Morada do Intelecto', functions: 'Fortalece o Yi (Intelecto), tonifica o Baço.'},
            { id: 'B50', name: 'Weicang', character: '胃倉', pt_name: 'Celeiro do Estômago', functions: 'Harmoniza o Estômago, trata dor abdominal.'},
            { id: 'B51', name: 'Huangmen', character: '肓門', pt_name: 'Porta da Região Vital', functions: 'Trata problemas mamários.'},
            { id: 'B52', name: 'Zhishi', character: '志室', pt_name: 'Câmara da Força de Vontade', functions: 'Fortalece o Zhi (Força de Vontade), tonifica o Rim.'},
            { id: 'B53', name: 'Baohuang', character: '胞肓', pt_name: 'Região Vital da Bexiga', functions: 'Regula os intestinos e a Bexiga.'},
            { id: 'B54', name: 'Zhibian', character: '秩邊', pt_name: 'Borda Ordenada', functions: 'Trata dor ciática e dor lombar.'},
            { id: 'B55', name: 'Heyang', character: '合陽', pt_name: 'Confluência Yang', functions: 'Relaxa os tendões, trata dor lombar.'},
            { id: 'B56', name: 'Chengjin', character: '承筋', pt_name: 'Suporte do Músculo', functions: 'Relaxa os tendões, trata cãibras e hemorróidas.'},
            { id: 'B57', name: 'Chengshan', character: '承山', pt_name: 'Suporte da Montanha', functions: 'Principal ponto para cãibras na perna e hemorróidas.'},
            { id: 'B58', name: 'Feiyang', character: '飛揚', pt_name: 'Voar Alto', functions: 'Ponto Luo-Conexão. Trata dor lombar e tonturas.'},
            { id: 'B59', name: 'Fuyang', character: '跗陽', pt_name: 'Yang do Tarso', functions: 'Trata dor no calcanhar e dor de cabeça.'},
            { id: 'B60', name: 'Kunlun', character: '崑崙', pt_name: 'Montanhas Kunlun', functions: 'Ponto de aspiração para dor em toda a coluna.'},
            { id: 'B61', name: 'Pucan', character: '僕參', pt_name: 'Servo Visitante', functions: 'Trata dor no calcanhar.'},
            { id: 'B62', name: 'Shenmai', character: '申脈', pt_name: 'Nono Vaso', functions: 'Ponto mestre do Vaso Yang do Calcanhar. Trata insónia e dor de cabeça.'},
            { id: 'B63', name: 'Jinmen', character: '金門', pt_name: 'Porta Dourada', functions: 'Ponto Xi-Fenda. Trata dor lombar aguda.'},
            { id: 'B64', name: 'Jinggu', character: '京骨', pt_name: 'Osso Capital', functions: 'Ponto Fonte. Limpa Calor da cabeça, acalma o Vento.'},
            { id: 'B65', name: 'Shugu', character: '束骨', pt_name: 'Osso Atado', functions: 'Trata dor de cabeça occipital e rigidez no pescoço.'},
            { id: 'B66', name: 'Zutonggu', character: '足通谷', pt_name: 'Vale de Conexão do Pé', functions: 'Limpa o Calor da cabeça.'},
            { id: 'B67', name: 'Zhiyin', character: '至陰', pt_name: 'Chegada do Yin', functions: 'Corrige a posição do feto, trata dores de cabeça.'}
        ]
    },
    {
        id: 'rim', name: 'Rim (R)', element: 'Água', time: '17-19h',
        functions: 'Armazena a Essência (Jing), governa o nascimento, crescimento e reprodução. Produz a Medula. Abriga a Força de Vontade (Zhi).',
        imbalances: 'Dor lombar, problemas de joelhos, zumbido, vertigens, problemas sexuais, fadiga crónica.', color: 'water',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Madeira', point: 'R1', functions: 'Reanima, desce o excesso de Yang, acalma o Shen.'},
            { type: 'Ying-Spring (Nascente)', element: 'Fogo', point: 'R2', functions: 'Limpa Calor por Deficiência de Yin, regula o Aquecedor Inferior.'},
            { type: 'Shu-Stream (Riacho)', element: 'Terra', point: 'R3', functions: 'Tonifica o Rim (Yin, Yang, Jing), fortalece a lombar e os joelhos.'},
            { type: 'Jing-River (Rio)', element: 'Metal', point: 'R7', functions: 'Regula a transpiração, tonifica o Yang do Rim, resolve edema.'},
            { type: 'He-Sea (Mar)', element: 'Água', point: 'R10', functions: 'Limpa Humidade-Calor do Aquecedor Inferior, beneficia o Rim.'}
        ],
        yuan_source: 'R3', luo_connecting: 'R4', xi_cleft: 'R5',
        points: [
            { id: 'R1', name: 'Yongquan', character: '湧泉', pt_name: 'Fonte Borbulhante', functions: 'Reanima, ancora o Yang, acalma a mente.'},
            { id: 'R2', name: 'Rangu', character: '然谷', pt_name: 'Vale Aceso', functions: 'Limpa Calor por Deficiência, trata suores noturnos e garganta seca.'},
            { id: 'R3', name: 'Taixi', character: '太谿', pt_name: 'Correnteza Suprema', functions: 'Ponto Fonte. Principal ponto para tonificar o Rim em todos os aspetos.'},
            { id: 'R4', name: 'Dazhong', character: '大鐘', pt_name: 'Grande Sino', functions: 'Ponto Luo-Conexão. Tonifica o Rim, fortalece a Força de Vontade.'},
            { id: 'R5', name: 'Shuiquan', character: '水泉', pt_name: 'Fonte da Água', functions: 'Ponto Xi-Fenda. Regula a menstruação, trata amenorreia.'},
            { id: 'R6', name: 'Zhaohai', character: '照海', pt_name: 'Mar Iluminado', functions: 'Ponto mestre do Vaso Yin do Calcanhar. Nutre o Yin, beneficia a garganta, trata insónia.'},
            { id: 'R7', name: 'Fuliu', character: '復溜', pt_name: 'Fluxo Renovado', functions: 'Regula a transpiração, tonifica o Yang do Rim, trata edema.'},
            { id: 'R8', name: 'Jiaoxin', character: '交信', pt_name: 'Encontro da Confiança', functions: 'Regula a menstruação, pára sangramento uterino.'},
            { id: 'R9', name: 'Zhubin', character: '築賓', pt_name: 'Edifício do Hóspede', functions: 'Acalma o Coração, transforma a Fleuma.'},
            { id: 'R10', name: 'Yingu', character: '陰谷', pt_name: 'Vale Yin', functions: 'Limpa Humidade-Calor, trata problemas genitais e urinários.'},
            { id: 'R11', name: 'Henggu', character: '橫骨', pt_name: 'Osso Horizontal', functions: 'Trata dor nos genitais externos.'},
            { id: 'R12', name: 'Dahe', character: '大赫', pt_name: 'Grande Esplendor', functions: 'Tonifica o Rim, consolida a Essência.'},
            { id: 'R13', name: 'Qixue', character: '氣穴', pt_name: 'Cavidade do Qi', functions: 'Beneficia o Vaso Penetrador (Chong Mai).'},
            { id: 'R14', name: 'Siman', character: '四滿', pt_name: 'Quatro Plenitudes', functions: 'Move o Sangue no abdómen, trata massas abdominais.'},
            { id: 'R15', name: 'Zhongzhu', character: '中注', pt_name: 'Injeção Central', functions: 'Regula os intestinos, trata obstipação.'},
            { id: 'R16', name: 'Huangshu', character: '肓俞', pt_name: 'Ponto Shu da Região Vital', functions: 'Regula o Qi no abdómen.'},
            { id: 'R17', name: 'Shangqu', character: '商曲', pt_name: 'Curva do Mercador', functions: 'Alivia a dor abdominal.'},
            { id: 'R18', name: 'Shiguan', character: '石關', pt_name: 'Barreira de Pedra', functions: 'Harmoniza o Estômago.'},
            { id: 'R19', name: 'Yindu', character: '陰都', pt_name: 'Metrópole Yin', functions: 'Trata dor gástrica e refluxo.'},
            { id: 'R20', name: 'Futonggu', character: '腹通谷', pt_name: 'Vale de Conexão do Abdómen', functions: 'Harmoniza o Aquecedor Médio.'},
            { id: 'R21', name: 'Youmen', character: '幽門', pt_name: 'Porta Escondida', functions: 'Harmoniza o Estômago, trata vómitos.'},
            { id: 'R22', name: 'Bulang', character: '步廊', pt_name: 'Corredor de Caminhada', functions: 'Desce o Qi do Pulmão, trata tosse e dor no peito.'},
            { id: 'R23', name: 'Shenfeng', character: '神封', pt_name: 'Selo do Espírito', functions: 'Beneficia o peito e o Pulmão.'},
            { id: 'R24', name: 'Lingxu', character: '靈墟', pt_name: 'Ruínas do Espírito', functions: 'Trata tosse e dor no peito.'},
            { id: 'R25', name: 'Shencang', character: '神藏', pt_name: 'Armazém do Espírito', functions: 'Desce o Qi rebelde.'},
            { id: 'R26', name: 'Yuzhong', character: '彧中', pt_name: 'Centro Elegante', functions: 'Trata tosse e asma.'},
            { id: 'R27', name: 'Shufu', character: '俞府', pt_name: 'Palácio do Ponto Shu', functions: 'Ponto final do meridiano. Transforma a Fleuma, pára a tosse.'}
        ]
    },
    {
        id: 'pericardio', name: 'Pericárdio (PC)', element: 'Fogo', time: '19-21h',
        functions: 'Protetor do Coração. Governa o Sangue e abriga a Mente juntamente com o Coração. Influencia as relações.',
        imbalances: 'Ansiedade, palpitações, pânico, opressão no peito, problemas de relacionamento.', color: 'fire',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Madeira', point: 'PC9', functions: 'Reanima, limpa o Calor do Coração.'},
            { type: 'Ying-Spring (Nascente)', element: 'Fogo', point: 'PC8', functions: 'Limpa o Fogo do Coração, arrefece o Sangue, acalma o Shen.'},
            { type: 'Shu-Stream (Riacho)', element: 'Terra', point: 'PC7', functions: 'Limpa o Calor do Coração, acalma o Shen, harmoniza o Estômago.'},
            { type: 'Jing-River (Rio)', element: 'Metal', point: 'PC5', functions: 'Transforma a Fleuma, acalma o Shen, desce o Qi rebelde.'},
            { type: 'He-Sea (Mar)', element: 'Água', point: 'PC3', functions: 'Arrefece o Sangue, pára sangramentos, acalma o Shen.'}
        ],
        yuan_source: 'PC7', luo_connecting: 'PC6', xi_cleft: 'PC4',
        points: [
            { id: 'PC1', name: 'Tianchi', character: '天池', pt_name: 'Lagoa Celestial', functions: 'Abre o peito, regula o Qi, trata dor no hipocôndrio.'},
            { id: 'PC2', name: 'Tianquan', character: '天泉', pt_name: 'Fonte Celestial', functions: 'Alivia a tosse e a dor no peito e braço.'},
            { id: 'PC3', name: 'Quze', character: '曲澤', pt_name: 'Pântano Sinuoso', functions: 'Limpa Calor, arrefece o Sangue, trata problemas de pele com calor.'},
            { id: 'PC4', name: 'Ximen', character: '郄門', pt_name: 'Porta da Fenda', functions: 'Ponto Xi-Fenda. Move o Sangue, pára a dor (angina), acalma o Shen.'},
            { id: 'PC5', name: 'Jianshi', character: '間使', pt_name: 'Mensageiro Intermediário', functions: 'Resolve a Fleuma que obstrui o Coração, acalma o Shen.'},
            { id: 'PC6', name: 'Neiguan', character: '內關', pt_name: 'Barreira Interna', functions: 'Ponto Luo-Conexão. Ponto mestre do peito. Regula o Coração, acalma o Shen, harmoniza o Estômago (náuseas).'},
            { id: 'PC7', name: 'Daling', character: '大陵', pt_name: 'Grande Monte', functions: 'Ponto Fonte. Limpa o Fogo do Coração, acalma o Shen, trata síndrome do túnel cárpico.'},
            { id: 'PC8', name: 'Laogong', character: '勞宮', pt_name: 'Palácio do Trabalho', functions: 'Limpa o Fogo do Coração, trata úlceras orais e ansiedade severa.'},
            { id: 'PC9', name: 'Zhongchong', character: '中沖', pt_name: 'Impulso Central', functions: 'Reanima, limpa o Calor do Coração.'}
        ]
    },
    {
        id: 'triplo-aquecedor', name: 'Triplo Aquecedor (TA)', element: 'Fogo', time: '21-23h',
        functions: 'Regula as vias da água e a temperatura nos três "queimadores" (Superior, Médio e Inferior).',
        imbalances: 'Edema, desequilíbrios de temperatura, problemas de ouvidos, enxaquecas temporais.', color: 'fire',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Metal', point: 'TA1', functions: 'Limpa Calor, beneficia a garganta e a língua.'},
            { type: 'Ying-Spring (Nascente)', element: 'Água', point: 'TA2', functions: 'Expele Vento-Calor, beneficia os ouvidos.'},
            { type: 'Shu-Stream (Riacho)', element: 'Madeira', point: 'TA3', functions: 'Beneficia os ouvidos, limpa a cabeça e os olhos, trata zumbido e surdez.'},
            { type: 'Jing-River (Rio)', element: 'Fogo', point: 'TA6', functions: 'Regula o Qi, limpa Calor no hipocôndrio, trata obstipação.'},
            { type: 'He-Sea (Mar)', element: 'Terra', point: 'TA10', functions: 'Transforma a Fleuma, trata nódulos no pescoço (escrófula).'}
        ],
        yuan_source: 'TA4', luo_connecting: 'TA5', xi_cleft: 'TA7',
        points: [
            { id: 'TA1', name: 'Guanchong', character: '關沖', pt_name: 'Impulso da Barreira', functions: 'Limpa Calor, beneficia a garganta.'},
            { id: 'TA2', name: 'Yemen', character: '液門', pt_name: 'Porta dos Fluidos', functions: 'Limpa Calor, trata dor de cabeça e olhos vermelhos.'},
            { id: 'TA3', name: 'Zhongzhu', character: '中渚', pt_name: 'Ilhota Central', functions: 'Beneficia os ouvidos, trata zumbido e dor de cabeça temporal.'},
            { id: 'TA4', name: 'Yangchi', character: '陽池', pt_name: 'Lagoa Yang', functions: 'Ponto Fonte. Relaxa os tendões, trata dor no pulso.'},
            { id: 'TA5', name: 'Waiguan', character: '外關', pt_name: 'Barreira Externa', functions: 'Ponto Luo-Conexão. Ponto mestre do Vaso Yang de Conexão. Liberta o exterior, trata febre e enxaquecas.'},
            { id: 'TA6', name: 'Zhigou', character: '支溝', pt_name: 'Fosso Ramificado', functions: 'Trata obstipação por estagnação de Qi, limpa o hipocôndrio.'},
            { id: 'TA7', name: 'Huizong', character: '會宗', pt_name: 'Encontro Ancestral', functions: 'Ponto Xi-Fenda. Beneficia os ouvidos.'},
            { id: 'TA8', name: 'Sanyangluo', character: '三陽絡', pt_name: 'Conexão dos Três Yang', functions: 'Ativa os 3 meridianos Yang do braço.'},
            { id: 'TA9', name: 'Sidu', character: '四瀆', pt_name: 'Quatro Rios', functions: 'Beneficia a garganta e os ouvidos.'},
            { id: 'TA10', name: 'Tianjing', character: '天井', pt_name: 'Poço Celestial', functions: 'Transforma a Fleuma, trata nódulos no pescoço e enxaqueca.'},
            { id: 'TA11', name: 'Qinglengyuan', character: '清冷淵', pt_name: 'Abismo Frio e Claro', functions: 'Trata dor no ombro e braço.'},
            { id: 'TA12', name: 'Xiaoluo', character: '消濼', pt_name: 'Dispersão do Rio', functions: 'Alivia a dor no braço.'},
            { id: 'TA13', name: 'Naohui', character: '臑會', pt_name: 'Encontro do Braço', functions: 'Trata dor no ombro.'},
            { id: 'TA14', name: 'Jianliao', character: '肩髎', pt_name: 'Fissura do Ombro', functions: 'Beneficia o ombro, trata dor e dificuldade de movimento.'},
            { id: 'TA15', name: 'Tianliao', character: '天髎', pt_name: 'Fissura Celestial', functions: 'Trata dor no ombro e rigidez no pescoço.'},
            { id: 'TA16', name: 'Tianyou', character: '天牖', pt_name: 'Janela Celestial', functions: 'Beneficia a cabeça e o pescoço.'},
            { id: 'TA17', name: 'Yifeng', character: '翳風', pt_name: 'Tela do Vento', functions: 'Principal ponto para todos os distúrbios dos ouvidos.'},
            { id: 'TA18', name: 'Qimai', character: '瘈脈', pt_name: 'Vaso do Espasmo', functions: 'Trata zumbido e dor de cabeça.'},
            { id: 'TA19', name: 'Luxi', character: '顱息', pt_name: 'Repouso do Crânio', functions: 'Beneficia os ouvidos.'},
            { id: 'TA20', name: 'Jiaosun', character: '角孫', pt_name: 'Vértice da Orelha', functions: 'Beneficia os ouvidos e os dentes.'},
            { id: 'TA21', name: 'Ermen', character: '耳門', pt_name: 'Porta do Ouvido', functions: 'Beneficia os ouvidos, trata zumbido, surdez e otite.'},
            { id: 'TA22', name: 'Heliao', character: '和髎', pt_name: 'Fissura da Harmonia', functions: 'Trata zumbido e dor de cabeça.'},
            { id: 'TA23', name: 'Sizhukong', character: '絲竹空', pt_name: 'Buraco do Bambu de Seda', functions: 'Trata enxaqueca e problemas oculares.'}
        ]
    },
    {
        id: 'vesicula-biliar', name: 'Vesícula Biliar (VB)', element: 'Madeira', time: '23-01h',
        functions: 'Armazena e secreta a bílis. Controla a tomada de decisões, a coragem e a iniciativa. Governa os tendões.',
        imbalances: 'Indecisão, timidez, enxaquecas laterais, dor nas ancas, sabor amargo na boca.', color: 'wood',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Metal', point: 'VB44', functions: 'Limpa Calor, beneficia a cabeça e os olhos.'},
            { type: 'Ying-Spring (Nascente)', element: 'Água', point: 'VB43', functions: 'Limpa Calor e Humidade-Calor, trata dor de cabeça e zumbido.'},
            { type: 'Shu-Stream (Riacho)', element: 'Madeira', point: 'VB41', functions: 'Move o Qi do Fígado, trata problemas ginecológicos e dores de cabeça.'},
            { type: 'Jing-River (Rio)', element: 'Fogo', point: 'VB38', functions: 'Subjuga o Yang do Fígado, trata enxaquecas.'},
            { type: 'He-Sea (Mar)', element: 'Terra', point: 'VB34', functions: 'Ponto de Influência dos Tendões. Relaxa os tendões, trata dor ciática.'}
        ],
        yuan_source: 'VB40', luo_connecting: 'VB37', xi_cleft: 'VB36',
        points: [
            { id: 'VB1', name: 'Tongziliao', character: '瞳子髎', pt_name: 'Fissura da Pupila', functions: 'Beneficia os olhos, trata dor de cabeça temporal.'}, 
            { id: 'VB2', name: 'Tinghui', character: '聽會', pt_name: 'Encontro da Audição', functions: 'Beneficia os ouvidos, trata zumbido e surdez.'},
            { id: 'VB3', name: 'Shangguan', character: '上關', pt_name: 'Barreira Superior', functions: 'Beneficia os ouvidos e dentes.'}, 
            { id: 'VB4', name: 'Hanyan', character: '頷厭', pt_name: 'Repulsa da Mandíbula', functions: 'Trata enxaqueca e zumbido.'},
            { id: 'VB5', name: 'Xuanlu', character: '懸顱', pt_name: 'Crânio Suspenso', functions: 'Trata dor de cabeça e dor de dentes.'}, 
            { id: 'VB6', name: 'Xuanli', character: '懸厘', pt_name: 'Ordem Suspensa', functions: 'Trata enxaqueca e dor nos olhos.'},
            { id: 'VB7', name: 'Qubin', character: '曲鬢', pt_name: 'Curva da Têmpora', functions: 'Trata dor de cabeça e problemas na boca.'}, 
            { id: 'VB8', name: 'Shuaigu', character: '率谷', pt_name: 'Vale Condutor', functions: 'Trata enxaqueca e vómitos.'},
            { id: 'VB9', name: 'Tianchong', character: '天沖', pt_name: 'Impulso Celestial', functions: 'Trata dor de cabeça e problemas de gengivas.'}, 
            { id: 'VB10', name: 'Fubai', character: '浮白', pt_name: 'Branco Flutuante', functions: 'Trata zumbido e dor de dentes.'},
            { id: 'VB11', name: 'Touqiaoyin', character: '頭竅陰', pt_name: 'Abertura Yin da Cabeça', functions: 'Beneficia os ouvidos, língua e garganta.'}, 
            { id: 'VB12', name: 'Wangu', character: '完骨', pt_name: 'Osso Completo', functions: 'Trata insónia, dor de cabeça e rigidez no pescoço.'},
            { id: 'VB13', name: 'Benshen', character: '本神', pt_name: 'Espírito Raiz', functions: 'Acalma o Shen, trata dor de cabeça e epilepsia.'}, 
            { id: 'VB14', name: 'Yangbai', character: '陽白', pt_name: 'Branco Yang', functions: 'Beneficia os olhos e a testa, trata dor de cabeça frontal.'},
            { id: 'VB15', name: 'Toulinqi', character: '頭臨泣', pt_name: 'Lágrimas Iminentes da Cabeça', functions: 'Beneficia os olhos e o nariz.'}, 
            { id: 'VB16', name: 'Muchuang', character: '目窗', pt_name: 'Janela do Olho', functions: 'Beneficia os olhos, acalma o Vento.'},
            { id: 'VB17', name: 'Zhengying', character: '正營', pt_name: 'Acampamento Reto', functions: 'Trata dor de cabeça e tonturas.'}, 
            { id: 'VB18', name: 'Chengling', character: '承靈', pt_name: 'Suporte do Espírito', functions: 'Trata dor de cabeça e problemas nasais.'},
            { id: 'VB19', name: 'Naokong', character: '腦空', pt_name: 'Vazio do Cérebro', functions: 'Beneficia os olhos e o pescoço.'}, 
            { id: 'VB20', name: 'Fengchi', character: '風池', pt_name: 'Lagoa do Vento', functions: 'Principal ponto para expelir Vento (interno e externo). Beneficia a cabeça, olhos e pescoço.'},
            { id: 'VB21', name: 'Jianjing', character: '肩井', pt_name: 'Poço do Ombro', functions: 'Principal ponto para rigidez no pescoço e ombros. Desce o Qi. Contra-indicado na gravidez.'}, 
            { id: 'VB22', name: 'Yuanye', character: '淵腋', pt_name: 'Abismo da Axila', functions: 'Trata dor no hipocôndrio.'},
            { id: 'VB23', name: 'Zhejin', character: '輒筋', pt_name: 'Músculo da Costela', functions: 'Trata asma e dor no hipocôndrio.'}, 
            { id: 'VB24', name: 'Riyue', character: '日月', pt_name: 'Sol e Lua', functions: 'Ponto Mu da Vesícula Biliar. Move o Qi do Fígado, limpa Humidade-Calor.'},
            { id: 'VB25', name: 'Jingmen', character: '京門', pt_name: 'Porta da Capital', functions: 'Ponto Mu do Rim. Tonifica o Rim, regula as passagens da água.'}, 
            { id: 'VB26', name: 'Daimai', character: '帶脈', pt_name: 'Vaso da Cintura', functions: 'Ponto do Vaso da Cintura (Dai Mai). Regula a menstruação.'},
            { id: 'VB27', name: 'Wushu', character: '五樞', pt_name: 'Cinco Pivôs', functions: 'Trata problemas ginecológicos e dor lombar.'}, 
            { id: 'VB28', name: 'Weidao', character: '維道', pt_name: 'Caminho de Ligação', functions: 'Trata problemas ginecológicos e prolapsos.'},
            { id: 'VB29', name: 'Juliao', character: '居髎', pt_name: 'Fissura da Residência', functions: 'Trata dor na anca e coxa.'}, 
            { id: 'VB30', name: 'Huantiao', character: '環跳', pt_name: 'Salto Circular', functions: 'Principal ponto para a dor ciática e problemas da anca.'},
            { id: 'VB31', name: 'Fengshi', character: '風市', pt_name: 'Mercado do Vento', functions: 'Expele Vento, trata problemas de pele com comichão e dor na perna.'}, 
            { id: 'VB32', name: 'Zhongdu', character: '中瀆', pt_name: 'Fosso Central', functions: 'Trata dor ciática e fraqueza na perna.'},
            { id: 'VB33', name: 'Xiyangguan', character: '膝陽關', pt_name: 'Barreira Yang do Joelho', functions: 'Beneficia o joelho, relaxa os tendões.'}, 
            { id: 'VB34', name: 'Yanglingquan', character: '陽陵泉', pt_name: 'Fonte da Colina Yang', functions: 'Ponto de Influência dos Tendões. Relaxa todos os tendões do corpo.'},
            { id: 'VB35', name: 'Yangjiao', character: '陽交', pt_name: 'Cruzamento Yang', functions: 'Acalma o Shen, relaxa os tendões.'}, 
            { id: 'VB36', name: 'Waiqiu', character: '外丘', pt_name: 'Monte Exterior', functions: 'Ponto Xi-Fenda. Trata dor no meridiano.'},
            { id: 'VB37', name: 'Guangming', character: '光明', pt_name: 'Luz Brilhante', functions: 'Ponto Luo-Conexão. Beneficia os olhos, trata problemas de visão.'}, 
            { id: 'VB38', name: 'Yangfu', character: '陽輔', pt_name: 'Auxiliar Yang', functions: 'Limpa o Fogo da Vesícula Biliar, trata enxaquecas.'},
            { id: 'VB39', name: 'Xuanzhong', character: '懸鐘', pt_name: 'Sino Suspenso', functions: 'Ponto de Influência da Medula. Nutre a Medula e o Jing, beneficia o pescoço.'}, 
            { id: 'VB40', name: 'Qiuxu', character: '丘墟', pt_name: 'Ruínas do Monte', functions: 'Ponto Fonte. Move o Qi do Fígado, beneficia o tornozelo.'},
            { id: 'VB41', name: 'Zulinqi', character: '足臨泣', pt_name: 'Lágrimas Iminentes do Pé', functions: 'Ponto mestre do Vaso da Cintura (Dai Mai). Move o Qi do Fígado.'}, 
            { id: 'VB42', name: 'Diwuhui', character: '地五會', pt_name: 'Cinco Encontros da Terra', functions: 'Limpa Humidade-Calor.'},
            { id: 'VB43', name: 'Xiaxi', character: '俠谿', pt_name: 'Correnteza Valente', functions: 'Limpa Calor da cabeça e ouvidos.'}, 
            { id: 'VB44', name: 'Zuqiaoyin', character: '足竅陰', pt_name: 'Abertura Yin do Pé', functions: 'Limpa Calor, trata enxaquecas e problemas nos olhos.'}
        ]
    },
    {
        id: 'figado', name: 'Fígado (F)', element: 'Madeira', time: '01-03h',
        functions: 'Garante o fluxo suave de Qi. Armazena o Sangue. Controla os tendões e os olhos. Abriga a Alma Etérea (Hun).',
        imbalances: 'Irritabilidade, raiva, TPM, tensão muscular, problemas menstruais, dores de cabeça.', color: 'wood',
        five_shu: [
            { type: 'Jing-Well (Poço)', element: 'Madeira', point: 'F1', functions: 'Regula o Qi no Aquecedor Inferior, trata hérnias e sangramento uterino.'},
            { type: 'Ying-Spring (Nascente)', element: 'Fogo', point: 'F2', functions: 'Limpa o Fogo do Fígado, subjuga o Yang, acalma o Vento.'},
            { type: 'Shu-Stream (Riacho)', element: 'Terra', point: 'F3', functions: 'Principal ponto para mover o Qi do Fígado estagnado, subjuga o Yang.'},
            { type: 'Jing-River (Rio)', element: 'Metal', point: 'F4', functions: 'Move o Qi do Fígado, trata dor na zona inguinal.'},
            { type: 'He-Sea (Mar)', element: 'Água', point: 'F8', functions: 'Nutre o Sangue e o Yin do Fígado, limpa Humidade-Calor.'}
        ],
        yuan_source: 'F3', luo_connecting: 'F5', xi_cleft: 'F6',
        points: [
            { id: 'F1', name: 'Dadun', character: '大敦', pt_name: 'Grande Espessura', functions: 'Trata hérnias e problemas genitais, pára sangramento uterino.'},
            { id: 'F2', name: 'Xingjian', character: '行間', pt_name: 'Espaço Intermediário', functions: 'Limpa o Fogo do Fígado, trata dor de cabeça, olhos vermelhos, raiva.'},
            { id: 'F3', name: 'Taichong', character: '太沖', pt_name: 'Impulso Supremo', functions: 'Ponto Fonte. O "grande eliminador". Move o Qi estagnado em todo o corpo.'},
            { id: 'F4', name: 'Zhongfeng', character: '中封', pt_name: 'Selo Central', functions: 'Move o Qi do Fígado, trata dor no tornozelo e problemas genitais.'},
            { id: 'F5', name: 'Ligou', character: '蠡溝', pt_name: 'Fosso da Minhoca', functions: 'Ponto Luo-Conexão. Limpa Humidade-Calor do Aquecedor Inferior, trata problemas genitais.'},
            { id: 'F6', name: 'Zhongdu', character: '中都', pt_name: 'Metrópole Central', functions: 'Ponto Xi-Fenda. Move o Qi e o Sangue, trata dor aguda no hipocôndrio.'},
            { id: 'F7', name: 'Xiguan', character: '膝關', pt_name: 'Barreira do Joelho', functions: 'Relaxa os tendões, trata dor no joelho.'},
            { id: 'F8', name: 'Ququan', character: '曲泉', pt_name: 'Fonte Sinuosa', functions: 'Nutre o Sangue e o Yin do Fígado, trata problemas genitais e oculares por deficiência.'},
            { id: 'F9', name: 'Yinbao', character: '陰包', pt_name: 'Envoltório Yin', functions: 'Regula a menstruação.'},
            { id: 'F10', name: 'Zuwuli', character: '足五里', pt_name: 'Cinco Li do Pé', functions: 'Limpa Humidade-Calor, trata retenção urinária.'},
            { id: 'F11', name: 'Yinlian', character: '陰廉', pt_name: 'Canto Yin', functions: 'Beneficia a zona do útero.'},
            { id: 'F12', name: 'Jimai', character: '急脈', pt_name: 'Vaso Urgente', functions: 'Trata dor nos genitais externos.'},
            { id: 'F13', name: 'Zhangmen', character: '章門', pt_name: 'Porta do Emblema', functions: 'Ponto Mu do Baço e Ponto de Influência dos Órgãos Zang. Harmoniza o Fígado e o Baço.'},
            { id: 'F14', name: 'Qimen', character: '期門', pt_name: 'Porta do Ciclo', functions: 'Ponto Mu do Fígado. Move o Qi do Fígado, trata dor no hipocôndrio e problemas digestivos.'}
        ]
    }
];

// Exporta os dados sobre os ciclos de vida
export const lifeCyclesFemaleData = [
    { age: 7, content: 'A energia do Rim floresce, os dentes de leite são substituídos e o cabelo desenvolve-se.' },
    { age: 14, content: 'Chega a maturidade reprodutiva (menarca), o Vaso da Concepção flui e a mulher pode conceber.' },
    { age: 21, content: 'A energia do Rim está no seu pico, o corpo está no auge da vitalidade e os dentes do siso aparecem.' },
    { age: 28, content: 'O corpo e os ossos estão mais fortes, o cabelo está no seu esplendor, auge da condição física e fertilidade.' },
    { age: 35, content: 'O brilho do rosto e a vitalidade começam a diminuir suavemente, os meridianos da face enfraquecem.' },
    { age: 42, content: 'A energia Yang da parte superior do corpo começa a enfraquecer, o cabelo pode começar a ficar branco.' },
    { age: 49, content: 'A capacidade de conceber cessa (menopausa), os vasos Ren e Chong estão mais vazios.' },
    { age: 56, content: 'A energia dos Rins continua a diminuir. A preservação da Essência (Jing) é crucial para uma velhice saudável.' },
];
export const lifeCyclesMaleData = [
    { age: 8, content: 'A energia do Rim está plena, o cabelo é exuberante e os dentes permanentes aparecem.' },
    { age: 16, content: 'A essência (Jing) amadurece, o esperma é produzido e o homem pode reproduzir-se.' },
    { age: 24, content: 'A energia do Rim está no pico, os tendões e ossos são fortes, a força física está no máximo.' },
    { age: 32, content: 'O corpo está no auge da sua força e robustez, com músculos e ossos no seu ponto mais forte.' },
    { age: 40, content: 'A energia do Rim começa a declinar, o cabelo pode começar a cair e os dentes a enfraquecer.' },
    { age: 48, content: 'A energia Yang da parte superior do corpo começa a esgotar-se, o rosto envelhece e o cabelo fica grisalho.' },
    { age: 56, content: 'A energia do Fígado enfraquece, levando a rigidez nos tendões. A essência (Jing) diminui.' },
    { age: 64, content: 'A essência (Jing) e a energia dos órgãos estão diminuídas, o corpo envelhece visivelmente.' },
];

// Exporta os dados sobre a anatomia energética (CONTEÚDO ATUALIZADO)
export const anatomyData = [
    // ATUALIZAÇÃO: Conteúdo do Sistema Esquelético expandido com anatomia ocidental.
    { 
        id: 'esqueletico', 
        title: 'Sistema Esquelético', 
        content: '<div class="card-prose"><p class="mb-4"><strong>Visão MTC:</strong> Governado pelo <strong>Rim</strong>, que armazena a Essência (<span class="tooltip-term" data-term="jing" tabindex="0">Jing</span>). O Jing produz a Medula, que preenche os ossos, a medula espinhal e o cérebro. A força dos ossos, a saúde dos dentes (considerados "o excedente dos ossos") e a função cerebral dependem da força do Jing do Rim. Osteoporose ou problemas dentários crónicos podem indicar uma deficiência do Jing do Rim.</p><h4 class="font-bold text-lg mt-4 mb-2">Anatomia Ocidental Detalhada</h4><h5 class="font-semibold mt-3 mb-1">Esqueleto Axial</h5><ul class="list-disc list-inside text-sm space-y-1"><li><strong>Crânio:</strong><ul class="list-disc list-inside ml-4 mt-1"><li><u>Neurocrânio:</u> Frontal, Parietal (2), Temporal (2), Occipital, Esfenoide, Etmoide.</li><li><u>Viscerocrânio:</u> Mandíbula, Maxila (2), Zigomático (2), Nasal (2), Lacrimal (2), Palatino (2), Vómer, Concha nasal inferior (2).</li><li><u>Ossículos da Audição:</u> Martelo (2), Bigorna (2), Estribo (2).</li></ul></li><li><strong>Osso Hioide:</strong> Localizado no pescoço.</li><li><strong>Coluna Vertebral:</strong><ul class="list-disc list-inside ml-4 mt-1"><li>Vértebras Cervicais (7), Torácicas (12), Lombares (5), Sacro, Cóccix.</li></ul></li><li><strong>Caixa Torácica:</strong><ul class="list-disc list-inside ml-4 mt-1"><li>Esterno (Manúbrio, Corpo, Processo xifoide).</li><li>Costelas (24).</li></ul></li></ul><h5 class="font-semibold mt-3 mb-1">Esqueleto Apendicular</h5><ul class="list-disc list-inside text-sm space-y-1"><li><strong>Cintura Escapular:</strong> Clavícula (2), Omoplata (Escápula) (2).</li><li><strong>Membros Superiores:</strong><ul class="list-disc list-inside ml-4 mt-1"><li><u>Braço:</u> Úmero (2).</li><li><u>Antebraço:</u> Rádio (2), Cúbito (Ulna) (2).</li><li><u>Mão:</u> Ossos do Carpo (16), Metacarpos (10), Falanges (28).</li></ul></li><li><strong>Cintura Pélvica:</strong> Osso do quadril (Ílio, Ísquio, Púbis) (2).</li><li><strong>Membros Inferiores:</strong><ul class="list-disc list-inside ml-4 mt-1"><li><u>Coxa:</u> Fémur (2), Rótula (Patela) (2).</li><li><u>Perna:</u> Tíbia (2), Perónio (Fíbula) (2).</li><li><u>Pé:</u> Ossos do Tarso (14), Metatarsos (10), Falanges (28).</li></ul></li></ul></div>' 
    },
    // ATUALIZAÇÃO: Conteúdo do Sistema Muscular expandido com anatomia ocidental.
    { 
        id: 'muscular', 
        title: 'Sistema Muscular', 
        content: '<div class="card-prose"><p class="mb-4"><strong>Visão MTC:</strong> A MTC distingue entre Músculos e Tendões. Os <strong>Músculos</strong> são governados pelo <strong>Baço</strong>, que transforma os alimentos em Qi e Sangue para os nutrir. Músculos fracos ou fatigados podem indicar uma deficiência de Qi do Baço. Os <strong>Tendões</strong> são governados pelo <strong>Fígado</strong>, que os humedece com Sangue para garantir flexibilidade e movimento suave. Cãibras, espasmos ou rigidez podem indicar uma deficiência de Sangue no Fígado.</p><h4 class="font-bold text-lg mt-4 mb-2">Principais Músculos por Região</h4><h5 class="font-semibold mt-3 mb-1">Cabeça e Pescoço</h5><ul class="list-disc list-inside text-sm space-y-1"><li><strong>Músculos da Mastigação:</strong> Masséter, Temporal.</li><li><strong>Músculos Faciais:</strong> Orbicular do olho, Orbicular da boca, Bucinador, Zigomático.</li><li><strong>Músculos do Pescoço:</strong> Esternocleidomastoideo, Escalenos, Platisma.</li></ul><h5 class="font-semibold mt-3 mb-1">Tronco</h5><ul class="list-disc list-inside text-sm space-y-1"><li><strong>Peitorais:</strong> Peitoral maior, Peitoral menor, Serrátil anterior.</li><li><strong>Dorsais (Costas):</strong> Trapézio, Grande dorsal (Latíssimo do dorso), Romboides (maior e menor), Eretores da espinha.</li><li><strong>Abdominais:</strong> Reto abdominal, Oblíquo externo, Oblíquo interno, Transverso abdominal.</li><li><strong>Assoalho Pélvico:</strong> Levantador do ânus, Coccígeo.</li></ul><h5 class="font-semibold mt-3 mb-1">Membros Superiores</h5><ul class="list-disc list-inside text-sm space-y-1"><li><strong>Ombro:</strong> Deltoide, Manguito Rotador (Supraespinhoso, Infraespinhoso, Redondo menor, Subescapular).</li><li><strong>Braço:</strong> Bicípite braquial, Braquial, Coracobraquial, Tricípite braquial.</li><li><strong>Antebraço:</strong> Grupo flexor (ex: Flexor radial do carpo), Grupo extensor (ex: Extensor dos dedos).</li></ul><h5 class="font-semibold mt-3 mb-1">Membros Inferiores</h5><ul class="list-disc list-inside text-sm space-y-1"><li><strong>Região Glútea:</strong> Glúteo máximo, Glúteo médio, Glúteo mínimo.</li><li><strong>Coxa (Anterior):</strong> Quadríceps femoral (Reto femoral, Vasto lateral, Vasto medial, Vasto intermédio), Sartório.</li><li><strong>Coxa (Posterior):</strong> Isquiotibiais (Bicípite femoral, Semitendinoso, Semimembranoso).</li><li><strong>Coxa (Medial):</strong> Grupo dos Adutores (Adutor longo, magno, curto).</li><li><strong>Perna (Anterior):</strong> Tibial anterior.</li><li><strong>Perna (Posterior):</strong> Gastrocnémio (Gémeos), Sóleo.</li><li><strong>Perna (Lateral):</strong> Fibulares (longo e curto).</li></ul></div>' 
    },
    { id: 'cardiovascular', title: 'Sistema Cardiovascular', content: '<div class="card-prose"><p class="mb-4"><strong>Visão MTC:</strong> O <strong>Coração</strong> é o "Imperador". Governa o Sangue e os Vasos Sanguíneos, garantindo a circulação. Mais importante, abriga a Mente (<span class="tooltip-term" data-term="shen" tabindex="0">Shen</span>). A saúde do Coração afeta a circulação (pulso, compleição), mas também a clareza mental, a estabilidade emocional e o sono. Palpitações, ansiedade e insónia são frequentemente tratadas através do Coração.</p><h4 class="font-bold text-lg mb-2">Componentes Chave</h4><ul class="list-disc list-inside text-sm"><li><strong>Coração (Xin):</strong> Abriga o Shen e governa o Sangue.</li><li><strong>Vasos Sanguíneos (Mai):</strong> Extensões do Coração, transportam Qi e Sangue.</li><li><strong>Pericárdio (Xin Bao):</strong> O protetor do Coração.</li></ul></div>' },
    { id: 'respiratorio', title: 'Sistema Respiratório', content: '<div class="card-prose"><p class="mb-4"><strong>Visão MTC:</strong> O <strong>Pulmão</strong> é o "Primeiro Ministro". Governa o Qi de todo o corpo e a respiração, recebendo o "Qi limpo" do ar. Controla a "descida e dispersão" do Qi e dos fluidos. Também governa a pele e o <span class="tooltip-term" data-term="wei-qi" tabindex="0">Wei Qi</span> (energia de defesa), a nossa primeira linha de defesa contra fatores externos. A tristeza e o pesar podem enfraquecer o Qi do Pulmão.</p><h4 class="font-bold text-lg mb-2">Funções Chave</h4><ul class="list-disc list-inside text-sm"><li><strong>Respiração:</strong> Inalação do Qi do Ar.</li><li><strong>Dispersão:</strong> Distribui Qi e fluidos para a pele.</li><li><strong>Descida:</strong> Envia Qi e fluidos para os Rins e a Bexiga.</li></ul></div>' },
    { id: 'digestivo', title: 'Sistema Digestivo', content: '<div class="card-prose"><p class="mb-4"><strong>Visão MTC:</strong> Uma parceria central entre o <strong>Estômago</strong> e o <strong>Baço</strong>. O Estômago recebe e "apodrece e amadurece" os alimentos (o seu Qi deve descer). O Baço transforma os alimentos em <span class="tooltip-term" data-term="gu-qi" tabindex="0">Gu Qi</span> (Qi dos Alimentos) e transporta os nutrientes para todo o corpo (o seu Qi deve subir). O <strong>Fígado</strong> assegura o fluxo suave de Qi, essencial para uma boa digestão, enquanto os <strong>Intestinos</strong> separam o puro do impuro.</p><h4 class="font-bold text-lg mb-2">Órgãos Chave</h4><ul class="list-disc list-inside text-sm"><li><strong>Estômago:</strong> Receção.</li><li><strong>Baço:</strong> Transformação e Transporte.</li><li><strong>Fígado:</strong> Assegura o fluxo suave de Qi.</li><li><strong>Intestinos:</strong> Separação e Excreção.</li></ul></div>'},
    { id: 'nervoso', title: 'Sistema Nervoso', content: '<div class="card-prose"><p class="mb-4"><strong>Visão MTC:</strong> Não existe um "sistema nervoso" como na anatomia ocidental, mas as suas funções estão distribuídas. O <strong>Cérebro</strong> é o "Mar da Medula", nutrido pela Essência do <strong>Rim</strong> e governa a inteligência e a memória. A consciência, o pensamento e a estabilidade emocional são governados pelo <strong>Coração</strong>, que abriga o <span class="tooltip-term" data-term="shen" tabindex="0">Shen</span>. O <strong>Fígado</strong>, ao garantir o fluxo suave de Qi, previne a "tensão nervosa" e a irritabilidade, e abriga a Alma Etérea (<span class="tooltip-term" data-term="hun" tabindex="0">Hun</span>), ligada ao planeamento e aos sonhos.</p><h4 class="font-bold text-lg mb-2">Centros de Controlo</h4><ul class="list-disc list-inside text-sm"><li><strong>Cérebro (Mar da Medula):</strong> Nutrido pelo Rim.</li><li><strong>Coração (Shen):</strong> Governa a mente e a consciência.</li><li><strong>Fígado (Hun):</strong> Governa o planeamento e o fluxo emocional.</li></ul></div>' },
];

// Exporta os dados sobre os 5 Elementos
export const fiveElementsData = {
    madeira: { name: 'Madeira', color: 'wood', target: { geracao: 'fogo', controlo: 'terra' }, relations: { geracao: "Água gera Madeira, que gera Fogo.", controlo: "Metal controla Madeira, que controla Terra." }, table: `<tr><td>Órgãos</td><td>Fígado, Vesícula Biliar</td></tr><tr><td>Emoção</td><td>Raiva / Assertividade</td></tr><tr><td>Estação</td><td>Primavera</td></tr><tr><td>Clima</td><td>Vento</td></tr><tr><td>Cor</td><td>Verde</td></tr><tr><td>Sabor</td><td>Azedo</td></tr>`},
    fogo: { name: 'Fogo', color: 'fire', target: { geracao: 'terra', controlo: 'metal' }, relations: { geracao: "Madeira gera Fogo, que gera Terra.", controlo: "Água controla Fogo, que controla Metal." }, table: `<tr><td>Órgãos</td><td>Coração, I. Delgado</td></tr><tr><td>Emoção</td><td>Alegria / Pânico</td></tr><tr><td>Estação</td><td>Verão</td></tr><tr><td>Clima</td><td>Calor</td></tr><tr><td>Cor</td><td>Vermelho</td></tr><tr><td>Sabor</td><td>Amargo</td></tr>`},
    terra: { name: 'Terra', color: 'earth', target: { geracao: 'metal', controlo: 'agua' }, relations: { geracao: "Fogo gera Terra, que gera Metal.", controlo: "Madeira controla Terra, que controla Água." }, table: `<tr><td>Órgãos</td><td>Baço, Estômago</td></tr><tr><td>Emoção</td><td>Preocupação / Simpatia</td></tr><tr><td>Estação</td><td>Fim do Verão</td></tr><tr><td>Clima</td><td>Humidade</td></tr><tr><td>Cor</td><td>Amarelo</td></tr><tr><td>Sabor</td><td>Doce</td></tr>`},
    metal: { name: 'Metal', color: 'metal', target: { geracao: 'agua', controlo: 'madeira' }, relations: { geracao: "Terra gera Metal, que gera Água.", controlo: "Fogo controla Metal, que controla Madeira." }, table: `<tr><td>Órgãos</td><td>Pulmão, I. Grosso</td></tr><tr><td>Emoção</td><td>Tristeza / Desapego</td></tr><tr><td>Estação</td><td>Outono</td></tr><tr><td>Clima</td><td>Secura</td></tr><tr><td>Cor</td><td>Branco</td></tr><tr><td>Sabor</td><td>Picante</td></tr>`},
    agua: { name: 'Água', color: 'water', target: { geracao: 'madeira', controlo: 'fogo' }, relations: { geracao: "Metal gera Água, que gera Madeira.", controlo: "Terra controla Água, que controla Fogo." }, table: `<tr><td>Órgãos</td><td>Rim, Bexiga</td></tr><tr><td>Emoção</td><td>Medo / Força de Vontade</td></tr><tr><td>Estação</td><td>Inverno</td></tr><tr><td>Clima</td><td>Frio</td></tr><tr><td>Cor</td><td>Preto / Azul</td></tr><tr><td>Sabor</td><td>Salgado</td></tr>`}
};

// Exporta os dados do Glossário
export const glossaryData = {
    qi: { term: 'Qi (氣)', definition: 'A energia vital ou força da vida que flui através de todos os seres vivos, animando todas as funções fisiológicas.', category: 'Substâncias Fundamentais' },
    jing: { term: 'Jing (精)', definition: 'A Essência, a nossa reserva de energia mais profunda herdada dos pais. Governa o crescimento, a reprodução e o envelhecimento.', category: 'Substâncias Fundamentais' },
    shen: { term: 'Shen (神)', definition: 'O Espírito ou Mente. Reside no Coração e governa a consciência, o pensamento, a memória e a presença espiritual.', category: 'Substâncias Fundamentais' },
    xue: { term: 'Xue (血)', definition: 'O Sangue. Uma forma densa de Qi que nutre, humedece e suporta o corpo e a mente. Está intimamente ligado ao Shen.', category: 'Substâncias Fundamentais' },
    'jin-ye': { term: 'Jin Ye (津液)', definition: 'Os Fluidos Corporais. Inclui todas as secreções e fluidos do corpo, como saliva, suor e lágrimas. Humedecem a pele, músculos e órgãos.', category: 'Substâncias Fundamentais' },
    'zang-fu': { term: 'Zang-Fu (臟腑)', definition: 'O sistema de órgãos internos. Os Zang (Yin) são órgãos sólidos de armazenamento (Fígado, Coração, Baço, Pulmão, Rim). Os Fu (Yang) são órgãos ocos de transformação e excreção (Vesícula Biliar, Intestinos, etc.).', category: 'Fisiologia Energética' },
    'dan-tian': { term: 'Dan Tian (丹田)', definition: 'Literalmente "Campo de Cinábrio". Centros energéticos no corpo, sendo o mais conhecido o Dan Tian Inferior, localizado no baixo-ventre, considerado o reservatório principal de Qi.', category: 'Fisiologia Energética' },
    'wei-qi': { term: 'Wei Qi (衛氣)', definition: 'O Qi Defensivo. Circula na superfície do corpo, protegendo-o de fatores patogénicos externos. É a nossa imunidade energética.', category: 'Fisiologia Energética' },
    'ying-qi': { term: 'Ying Qi (營氣)', definition: 'O Qi Nutritivo. Flui com o Sangue nos meridianos para nutrir os órgãos internos e todo o corpo.', category: 'Fisiologia Energética' },
    'yuan-qi': { term: 'Yuan Qi (原氣)', definition: 'O Qi Original. Derivado do Jing Pré-Natal, é a força motriz para todas as atividades fisiológicas, armazenado nos Rins.', category: 'Fisiologia Energética' },
    'zong-qi': { term: 'Zong Qi (宗氣)', definition: 'O Qi Peitoral ou Ancestral. Formado a partir do ar e dos alimentos, acumula-se no peito e governa a respiração e a circulação.', category: 'Fisiologia Energética' },
    'gu-qi': { term: 'Gu Qi (谷氣)', definition: 'O Qi dos Alimentos. A primeira fase de energia extraída dos alimentos pelo Baço e Estômago.', category: 'Fisiologia Energética' },
    hun: { term: 'Hun (魂)', definition: 'A Alma Etérea. Associada ao Fígado, é responsável pelo sono, sonhos, planeamento e visão de vida. Após a morte, retorna ao "céu".', category: 'Aspetos da Mente/Espírito' },
    po: { term: 'Po (魄)', definition: 'A Alma Corpórea. Associada ao Pulmão, está ligada aos instintos, sensações e aspetos físicos da vida. Dissolve-se com o corpo após a morte.', category: 'Aspetos da Mente/Espírito' },
    yi: { term: 'Yi (意)', definition: 'O Intelecto ou Pensamento. Associado ao Baço, governa a capacidade de pensar, estudar, memorizar e focar.', category: 'Aspetos da Mente/Espírito' },
    zhi: { term: 'Zhi (志)', definition: 'A Força de Vontade. Associada aos Rins, é a força motriz por trás da nossa determinação, impulso e ambição.', category: 'Aspetos da Mente/Espírito' },
    'cinco-emocoes': { term: 'Cinco Emoções (五情)', definition: 'Cada sistema de órgãos Zang está associado a uma emoção: Alegria (Coração), Raiva (Fígado), Preocupação (Baço), Tristeza (Pulmão) e Medo (Rim).', category: 'Conceitos Filosóficos' },
    'seis-fatores': { term: 'Seis Fatores Patogénicos (六淫)', definition: 'Fatores climáticos externos que podem invadir o corpo e causar doença: Vento, Frio, Calor de Verão, Humidade, Seura e Fogo.', category: 'Patologias e Fatores Externos' },
    'sete-paixoes': { term: 'Sete Paixões (七情)', definition: 'Causas internas de doença, referindo-se ao excesso das emoções: alegria, raiva, preocupação, pensamento, tristeza, medo e choque.', category: 'Patologias e Fatores Externos' },
    'pontos-shu': { term: 'Pontos Shu Antigos', definition: 'Cinco pontos específicos em cada um dos 12 meridianos principais, localizados abaixo dos cotovelos e joelhos, que refletem o fluxo de Qi como um rio (do poço à nascente, riacho, rio e mar).', category: 'Pontos de Acupuntura' },
    'pontos-mu': { term: 'Pontos Mu (Alarme)', definition: 'Pontos na parte frontal do tronco que se tornam sensíveis ou dolorosos quando o seu órgão Zang-Fu correspondente está em desequilíbrio.', category: 'Pontos de Acupuntura' },
    'pontos-shu-costas': { term: 'Pontos Shu das Costas', definition: 'Pontos no meridiano da Bexiga, ao longo da coluna, que estão diretamente ligados a cada um dos órgãos Zang-Fu e são usados para tratar condições crónicas.', category: 'Pontos de Acupuntura' },
    'pontos-fonte': { term: 'Pontos Fonte (Yuan)', definition: 'Pontos onde o Qi Original (Yuan Qi) se acumula. São usados para tonificar os órgãos Zang-Fu.', category: 'Pontos de Acupuntura' },
    'pontos-luo': { term: 'Pontos de Conexão (Luo)', definition: 'Pontos que conectam um meridiano com o seu par acoplado (Yin/Yang), tratando desequilíbrios entre eles.', category: 'Pontos de Acupuntura' },
    'pontos-xi': { term: 'Pontos de Fenda (Xi)', definition: 'Pontos onde o Qi e o Sangue se acumulam profundamente. Usados para tratar condições agudas e dor.', category: 'Pontos de Acupuntura' },
    'humidade': { term: 'Humidade (濕)', definition: 'Um fator patogénico que causa sensação de peso, letargia, inchaço e secreções turvas. Pode ser externa (clima) ou interna (dieta inadequada).', category: 'Patologias e Fatores Externos' },
    'calor': { term: 'Calor (熱)', definition: 'Um fator patogénico que causa sintomas como febre, sede, rubor facial, agitação e inflamação.', category: 'Patologias e Fatores Externos' },
    'frio': { term: 'Frio (寒)', definition: 'Um fator patogénico que contrai e abranda o fluxo de Qi e Sangue, causando dor, rigidez e sensação de frio.', category: 'Patologias e Fatores Externos' },
    'vento': { term: 'Vento (風)', definition: 'Um fator patogénico caracterizado por movimento e mudança súbita. Causa sintomas como tremores, espasmos, comichão e dores que se movem.', category: 'Patologias e Fatores Externos' },
    'secura': { term: 'Secura (燥)', definition: 'Um fator patogénico que consome os fluidos do corpo, causando pele seca, tosse seca, sede e obstipação.', category: 'Patologias e Fatores Externos' },
    'fogo': { term: 'Fogo (火)', definition: 'Uma forma extrema de Calor, geralmente de origem interna, com sintomas mais intensos como febre alta, hemorragias e agitação mental severa.', category: 'Patologias e Fatores Externos' },
    'fleuma': { term: 'Fleuma (痰)', definition: 'Uma substância patológica mais densa que a humidade, resultante da estagnação de fluidos corporais. Pode manifestar-se como expectoração ou como nódulos e massas invisíveis que obstruem os meridianos.', category: 'Patologias e Fatores Externos' },
    'estagnacao-qi': { term: 'Estagnação de Qi', definition: 'Uma das patologias mais comuns, onde o fluxo de Qi está bloqueado ou constrangido, levando a dor, tensão, frustração e suspiros.', category: 'Padrões de Desarmonia' },
    'estagnacao-sangue': { term: 'Estagnação de Sangue', definition: 'O Sangue não flui livremente, causando dor fixa e em pontada, massas palpáveis e coloração roxa (lábios, unhas, língua).', category: 'Padrões de Desarmonia' },
    'deficiencia-qi': { term: 'Deficiência de Qi', definition: 'Falta de energia vital, resultando em cansaço, falta de ar, transpiração espontânea e voz fraca.', category: 'Padrões de Desarmonia' },
    'deficiencia-sangue': { term: 'Deficiência de Sangue (Xue)', definition: 'Uma condição em que o Sangue é insuficiente para nutrir o corpo, causando palidez, tonturas, visão turva, insónia e cabelo/unhas secas.', category: 'Padrões de Desarmonia' },
    'deficiencia-yin': { term: 'Deficiência de Yin', definition: 'Falta de fluidos e aspetos de arrefecimento, levando a "calor vazio" com sintomas como suores noturnos, calor nos 5 palmos, boca seca e agitação.', category: 'Padrões de Desarmonia' },
    'deficiencia-yang': { term: 'Deficiência de Yang', definition: 'Falta de calor e função, resultando em sensação de frio, aversão ao frio, membros frios, letargia e edema.', category: 'Padrões de Desarmonia' },
    'vasos-maravilhosos': { term: 'Oito Vasos Maravilhosos', definition: 'Reservatórios profundos de energia que regulam o Qi e o Sangue nos 12 meridianos principais. Os mais conhecidos são o Vaso da Concepção (Ren Mai) e o Vaso Governador (Du Mai).', category: 'Fisiologia Energética' },
    'ren-mai': { term: 'Ren Mai (Vaso da Concepção)', definition: 'Um dos 8 Vasos Maravilhosos. Governa todos os meridianos Yin e está intimamente ligado à reprodução e gravidez.', category: 'Fisiologia Energética' },
    'du-mai': { term: 'Du Mai (Vaso Governador)', definition: 'Um dos 8 Vasos Maravilhosos. Governa todos os meridianos Yang e a energia Yang do corpo, incluindo a coluna e o cérebro.', category: 'Fisiologia Energética' },
    'chong-mai': { term: 'Chong Mai (Vaso Penetrador)', definition: 'Conhecido como o "Mar de Sangue", é fundamental para a menstruação e circulação no abdómen e no peito.', category: 'Fisiologia Energética' },
    'dai-mai': { term: 'Dai Mai (Vaso da Cintura)', definition: 'O único meridiano horizontal, que cinge todos os meridianos verticais. Trata problemas na zona da cintura e ginecológicos.', category: 'Fisiologia Energética' },
    'sabor': { term: 'Sabor (Wei)', definition: 'A propriedade energética de um alimento ou erva (azedo, amargo, doce, picante, salgado) que determina a sua ação terapêutica.', category: 'Conceitos Filosóficos' },
    'natureza': { term: 'Natureza (Xing)', definition: 'A propriedade de temperatura de um alimento ou erva (frio, fresco, neutro, morno, quente) que descreve o seu efeito no corpo.', category: 'Conceitos Filosóficos' },
    'meridianos-tendino-musculares': { term: 'Meridianos Tendino-Musculares', definition: 'Vias superficiais que seguem os 12 meridianos principais, distribuindo Wei Qi e protegendo o corpo de traumas externos.', category: 'Fisiologia Energética' },
    'orificios': { term: 'Orifícios', definition: 'Os 7 orifícios da cabeça (olhos, ouvidos, narinas, boca) mais os 2 orifícios inferiores. A sua clareza está ligada à saúde dos órgãos internos.', category: 'Fisiologia Energética' },
    'mar-da-medula': { term: 'Mar da Medula', definition: 'Um termo para o Cérebro, que é considerado uma extensão da medula espinhal e nutrido pela Essência (Jing) dos Rins.', category: 'Fisiologia Energética' },
    'aquecedor-superior': { term: 'Aquecedor Superior (Shang Jiao)', definition: 'A parte superior do Triplo Aquecedor, englobando o Coração e o Pulmão. Compara-se a uma "névoa" que distribui Qi e fluidos.', category: 'Fisiologia Energética' },
    'aquecedor-medio': { term: 'Aquecedor Médio (Zhong Jiao)', definition: 'A parte média do Triplo Aquecedor, englobando o Baço e o Estômago. Compara-se a um "caldeirão borbulhante" que digere os alimentos.', category: 'Fisiologia Energética' },
    'aquecedor-inferior': { term: 'Aquecedor Inferior (Xia Jiao)', definition: 'A parte inferior do Triplo Aquecedor, englobando Fígado, Rins, Intestinos e Bexiga. Compara-se a uma "vala de drenagem" que separa e excreta os resíduos.', category: 'Fisiologia Energética' }
};

// Exporta os dados sobre a dietética (LISTA EXPANDIDA COM 200 ALIMENTOS)
export const foodData = [
    { name: 'Abacate', temp: 'Fresco', flavor: 'Doce', organs: 'Fígado, Pulmão, Intestino Grosso', actions: 'Tonifica o Sangue e o Yin, humedece os intestinos.' },
    { name: 'Abacaxi', temp: 'Neutro', flavor: 'Doce, Azedo', organs: 'Estômago, Bexiga', actions: 'Elimina calor de verão, promove a digestão, gera fluidos.' },
    { name: 'Abóbora', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Tonifica o Qi do Baço, resolve a Humidade e a Fleuma, alivia a dor.' },
    { name: 'Abobrinha', temp: 'Fresco', flavor: 'Doce', organs: 'Estômago, Pulmão', actions: 'Limpa o Calor, gera fluidos, alivia a sede.' },
    { name: 'Acelga', temp: 'Fresco', flavor: 'Doce', organs: 'Intestino Grosso, Estômago', actions: 'Limpa o Calor, humedece a secura, desintoxica.' },
    { name: 'Agrião', temp: 'Fresco', flavor: 'Picante, Doce', organs: 'Pulmão, Estômago', actions: 'Limpa o Calor do Pulmão, resolve a Fleuma, promove a micção.' },
    { name: 'Alcachofra', temp: 'Frio', flavor: 'Amargo, Doce', organs: 'Fígado, Vesícula Biliar, Estômago', actions: 'Limpa o Calor do Fígado e da Vesícula Biliar, promove a diurese.' },
    { name: 'Alecrim', temp: 'Morno', flavor: 'Picante', organs: 'Fígado, Baço, Pulmão', actions: 'Aquece o interior, acalma o Shen, move o Qi.' },
    { name: 'Alface', temp: 'Fresco', flavor: 'Doce, Amargo', organs: 'Intestinos, Estômago', actions: 'Elimina Calor, promove a micção, acalma a mente.' },
    { name: 'Alface Romana', temp: 'Fresco', flavor: 'Doce', organs: 'Coração, Intestino Delgado', actions: 'Limpa o Calor, promove a lactação.' },
    { name: 'Alfarroba', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago, Intestino Grosso', actions: 'Fortalece o Baço, pára a diarreia.' },
    { name: 'Alga Kombu', temp: 'Frio', flavor: 'Salgado', organs: 'Rim, Fígado, Estômago', actions: 'Amolece durezas, resolve Fleuma, promove a micção.' },
    { name: 'Alga Nori', temp: 'Frio', flavor: 'Doce, Salgado', organs: 'Pulmão, Estômago', actions: 'Resolve Fleuma, limpa Calor.' },
    { name: 'Alga Wakame', temp: 'Frio', flavor: 'Salgado', organs: 'Fígado, Rim', actions: 'Reduz o edema, amolece nódulos.' },
    { name: 'Alho', temp: 'Quente', flavor: 'Picante', organs: 'Baço, Estômago, Pulmão', actions: 'Aquece o centro, desintoxica, expele parasitas.' },
    { name: 'Alho Francês', temp: 'Morno', flavor: 'Picante', organs: 'Pulmão, Fígado, Estômago', actions: 'Aquece o interior, move o Qi, dispersa estagnação de Sangue.' },
    { name: 'Amêndoa', temp: 'Neutro', flavor: 'Doce', organs: 'Pulmão, Intestino Grosso', actions: 'Humedece o Pulmão e os intestinos, pára a tosse.' },
    { name: 'Ameixa', temp: 'Neutro', flavor: 'Doce, Azedo', organs: 'Fígado, Rim', actions: 'Gera fluidos, nutre o Yin do Fígado.' },
    { name: 'Ameixa Umeboshi', temp: 'Morno', flavor: 'Azedo, Salgado', organs: 'Fígado, Baço, Pulmão', actions: 'Adstringente, pára tosse e diarreia, neutraliza toxinas.' },
    { name: 'Amora', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Fígado, Rim', actions: 'Tonifica o Sangue e o Yin, arrefece o Sangue.' },
    { name: 'Anchova', temp: 'Morno', flavor: 'Salgado', organs: 'Baço, Rim', actions: 'Tonifica o Qi e o Sangue.' },
    { name: 'Anguila', temp: 'Neutro', flavor: 'Doce', organs: 'Fígado, Rim', actions: 'Tonifica o Yin e o Yang do Rim, expele Vento-Humidade.' },
    { name: 'Anis Estrelado', temp: 'Quente', flavor: 'Picante, Doce', organs: 'Fígado, Rim, Baço', actions: 'Aquece o interior, dispersa o Frio, regula o Qi.' },
    { name: 'Arenque', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Pulmão', actions: 'Tonifica o Qi, nutre o Yin.' },
    { name: 'Arroz Branco', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Tonifica o Qi do Baço, harmoniza o estômago, base de uma dieta equilibrada.' },
    { name: 'Arroz Doce (Glutinoso)', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Pulmão', actions: 'Tonifica o Qi, adstringe o suor.' },
    { name: 'Arroz Integral', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Tonifica o Qi, fortalece o Baço.' },
    { name: 'Atum', temp: 'Neutro', flavor: 'Doce', organs: 'Fígado, Rim', actions: 'Tonifica o Sangue, nutre o Yin.' },
    { name: 'Aveia', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Estômago, Pulmão', actions: 'Tonifica o Qi, acalma o Shen, adstringe o suor.' },
    { name: 'Avelã', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Fortalece o Baço e o Qi.' },
    { name: 'Azeite', temp: 'Fresco', flavor: 'Doce', organs: 'Pulmão, Intestino Grosso', actions: 'Limpa Calor, humedece a secura.' },
    { name: 'Azeitona', temp: 'Neutro', flavor: 'Doce, Azedo', organs: 'Pulmão, Estômago', actions: 'Limpa o Calor do Pulmão, beneficia a garganta, desintoxica.' },
    { name: 'Bacalhau', temp: 'Frio', flavor: 'Salgado', organs: 'Rim', actions: 'Tonifica o Yin, limpa Calor por Deficiência.' },
    { name: 'Bambu (rebentos)', temp: 'Frio', flavor: 'Doce', organs: 'Pulmão, Estômago', actions: 'Limpa Calor, resolve Fleuma.' },
    { name: 'Banana', temp: 'Frio', flavor: 'Doce', organs: 'Pulmão, Intestino Grosso', actions: 'Elimina Calor, humedece os intestinos e o Pulmão.' },
    { name: 'Batata', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Tonifica o Qi, harmoniza o Estômago.' },
    { name: 'Batata Doce', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Rim', actions: 'Tonifica o Baço e o Rim, fortalece o Qi.' },
    { name: 'Beringela', temp: 'Frio', flavor: 'Doce', organs: 'Baço, Estômago, Intestino Grosso', actions: 'Elimina Calor, arrefece e move o Sangue.' },
    { name: 'Beterraba', temp: 'Neutro', flavor: 'Doce', organs: 'Coração, Fígado', actions: 'Tonifica o Sangue, acalma o Shen, humedece os intestinos.' },
    { name: 'Bife de Vaca', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Tonifica o Qi e o Sangue, fortalece os ossos e tendões.' },
    { name: 'Brócolos', temp: 'Fresco', flavor: 'Doce, Picante', organs: 'Fígado, Pulmão, Intestino Grosso', actions: 'Elimina Calor, beneficia os olhos.' },
    { name: 'Cacau', temp: 'Morno', flavor: 'Amargo, Doce', organs: 'Coração, Fígado', actions: 'Move o Qi e o Sangue, eleva o espírito (Shen).' },
    { name: 'Café', temp: 'Morno', flavor: 'Amargo, Doce', organs: 'Coração, Pulmão, Fígado', actions: 'Estimula o Yang, move o Qi, promove a diurese.' },
    { name: 'Caju', temp: 'Neutro', flavor: 'Doce', organs: 'Rim, Intestino Grosso', actions: 'Tonifica o Yin do Rim, humedece os intestinos.' },
    { name: 'Camarão', temp: 'Morno', flavor: 'Doce, Salgado', organs: 'Rim, Fígado', actions: 'Tonifica o Yang do Rim, fortalece o Sangue.' },
    { name: 'Camomila', temp: 'Fresco', flavor: 'Doce, Amargo', organs: 'Fígado, Pulmão', actions: 'Acalma o Fígado, limpa o Calor, acalma a mente.' },
    { name: 'Canela', temp: 'Quente', flavor: 'Doce, Picante', organs: 'Rim, Baço, Fígado, Coração', actions: 'Aquece fortemente o interior, tonifica o Yang do Rim, alivia a dor por frio.' },
    { name: 'Cânhamo (sementes)', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Intestino Grosso', actions: 'Humedece e desbloqueia os intestinos.' },
    { name: 'Caqui', temp: 'Frio', flavor: 'Doce', organs: 'Coração, Pulmão, Intestino Grosso', actions: 'Limpa o Calor do Pulmão, pára o sangramento.' },
    { name: 'Caranguejo', temp: 'Frio', flavor: 'Salgado', organs: 'Fígado, Estômago', actions: 'Arrefece o Sangue, move a estagnação.' },
    { name: 'Cardamomo', temp: 'Morno', flavor: 'Picante', organs: 'Pulmão, Baço, Estômago', actions: 'Resolve a Humidade, aquece o centro, move o Qi.' },
    { name: 'Carne de Porco', temp: 'Neutro', flavor: 'Doce, Salgado', organs: 'Rim, Baço, Estômago', actions: 'Nutre o Yin, humedece a secura.' },
    { name: 'Carpa', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Rim', actions: 'Promove a micção, reduz o edema.' },
    { name: 'Casta de Caju', temp: 'Neutro', flavor: 'Doce', organs: 'Rim, Intestino Grosso', actions: 'Tonifica o Yin do Rim, humedece os intestinos.' },
    { name: 'Castanha', temp: 'Morno', flavor: 'Doce', organs: 'Rim, Baço, Estômago', actions: 'Tonifica o Rim e o Qi do Baço, fortalece a lombar.' },
    { name: 'Cavala', temp: 'Neutro', flavor: 'Doce', organs: 'Fígado, Rim', actions: 'Tonifica o Sangue, expele Vento.' },
    { name: 'Cebola', temp: 'Morno', flavor: 'Picante, Doce', organs: 'Pulmão, Estômago', actions: 'Move o Qi, resolve a Fleuma, harmoniza o Estômago.' },
    { name: 'Cebolinho', temp: 'Morno', flavor: 'Picante', organs: 'Pulmão, Fígado', actions: 'Induz a transpiração, dispersa o Frio.' },
    { name: 'Cenoura', temp: 'Neutro', flavor: 'Doce', organs: 'Fígado, Baço, Pulmão', actions: 'Tonifica o Baço, beneficia o Fígado e os olhos, resolve a indigestão.' },
    { name: 'Centeio', temp: 'Fresco', flavor: 'Amargo, Doce', organs: 'Fígado, Coração', actions: 'Limpa o Calor, acalma o Shen.' },
    { name: 'Cereja', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Fígado, Rim', actions: 'Tonifica o Baço e o Sangue, aquece o Rim.' },
    { name: 'Cevada', temp: 'Fresco', flavor: 'Doce, Salgado', organs: 'Baço, Estômago', actions: 'Tonifica o Baço, elimina Humidade, limpa Calor.' },
    { name: 'Chá Preto', temp: 'Morno', flavor: 'Doce, Amargo', organs: 'Coração, Fígado', actions: 'Aquece o estômago, acalma a mente.' },
    { name: 'Chá Verde', temp: 'Frio', flavor: 'Amargo, Doce', organs: 'Coração, Pulmão, Estômago', actions: 'Elimina calor, acalma a mente, promove a micção, desintoxica.' },
    { name: 'Chucrute', temp: 'Morno', flavor: 'Azedo', organs: 'Fígado, Intestino Grosso', actions: 'Promove a digestão, move o Qi do Fígado.' },
    { name: 'Coelho', temp: 'Fresco', flavor: 'Doce', organs: 'Fígado, Intestino Grosso', actions: 'Tonifica o Qi, arrefece o Sangue.' },
    { name: 'Coentros', temp: 'Morno', flavor: 'Picante', organs: 'Pulmão, Baço', actions: 'Promove a erupção de sarampo, promove a digestão.' },
    { name: 'Cogumelos (Enoki)', temp: 'Fresco', flavor: 'Doce', organs: 'Fígado, Estômago', actions: 'Beneficia o Fígado, limpa o Calor.' },
    { name: 'Cogumelos (Shiitake)', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Tonifica o Qi, fortalece o Estômago, desintoxica.' },
    { name: 'Cominhos', temp: 'Morno', flavor: 'Picante', organs: 'Fígado, Rim, Baço', actions: 'Aquece o interior, dispersa o Frio.' },
    { name: 'Couve', temp: 'Neutro', flavor: 'Doce', organs: 'Estômago, Intestino Grosso', actions: 'Harmoniza o Estômago, humedece os intestinos.' },
    { name: 'Couve-flor', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Fortalece o Baço, resolve a Humidade.' },
    { name: 'Couve-Roxa', temp: 'Neutro', flavor: 'Doce', organs: 'Fígado, Estômago', actions: 'Move o Sangue, pára a dor.' },
    { name: 'Cravo-da-índia', temp: 'Quente', flavor: 'Picante', organs: 'Rim, Baço, Estômago', actions: 'Aquece o centro, faz descer o Qi rebelde.' },
    { name: 'Damasco', temp: 'Morno', flavor: 'Doce, Azedo', organs: 'Pulmão', actions: 'Humedece o Pulmão, gera fluidos.' },
    { name: 'Endívia', temp: 'Frio', flavor: 'Amargo', organs: 'Coração, Intestino Delgado', actions: 'Limpa Calor, promove a diurese.' },
    { name: 'Ervilha', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Harmoniza o centro, promove a micção.' },
    { name: 'Escargot', temp: 'Frio', flavor: 'Salgado', organs: 'Intestino Grosso', actions: 'Limpa Calor, desintoxica, reduz o inchaço.' },
    { name: 'Espargos', temp: 'Fresco', flavor: 'Doce, Amargo', organs: 'Pulmão, Rim', actions: 'Tonifica o Yin do Pulmão e do Rim, elimina Calor.' },
    { name: 'Espelta', temp: 'Fresco', flavor: 'Doce', organs: 'Baço, Rim', actions: 'Tonifica o Baço, limpa o Calor.' },
    { name: 'Espinafres', temp: 'Fresco', flavor: 'Doce', organs: 'Intestinos, Estômago', actions: 'Nutre o Sangue, humedece a secura, arrefece.' },
    { name: 'Favas', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Fortalece o Baço, resolve a Humidade.' },
    { name: 'Feijão Azuki', temp: 'Neutro', flavor: 'Doce, Azedo', organs: 'Coração, Rim', actions: 'Promove a micção, reduz o edema, desintoxica.' },
    { name: 'Feijão Branco', temp: 'Neutro', flavor: 'Doce', organs: 'Pulmão, Baço', actions: 'Tonifica o Yin, fortalece o Baço.' },
    { name: 'Feijão Mungo', temp: 'Frio', flavor: 'Doce', organs: 'Coração, Estômago', actions: 'Limpa o Calor de Verão, desintoxica.' },
    { name: 'Feijão Preto', temp: 'Neutro', flavor: 'Doce', organs: 'Rim, Fígado', actions: 'Tonifica o Yin e o Sangue, beneficia os Rins.' },
    { name: 'Feijão Verde', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Rim', actions: 'Tonifica o Yin, fortalece o Baço.' },
    { name: 'Figo', temp: 'Neutro', flavor: 'Doce', organs: 'Pulmão, Intestino Grosso, Baço', actions: 'Humedece o Pulmão, elimina toxinas, trata obstipação.' },
    { name: 'Frango', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Aquece o centro, tonifica o Qi e o Sangue.' },
    { name: 'Framboesa', temp: 'Morno', flavor: 'Doce, Azedo', organs: 'Fígado, Rim', actions: 'Tonifica o Rim, consolida a Essência.' },
    { name: 'Funcho', temp: 'Morno', flavor: 'Picante', organs: 'Fígado, Rim, Estômago', actions: 'Aquece o Fígado e o Rim, dispersa o Frio, alivia a dor.' },
    { name: 'Ganso', temp: 'Neutro', flavor: 'Doce', organs: 'Pulmão, Baço', actions: 'Tonifica o Qi e o Sangue.' },
    { name: 'Gengibre', temp: 'Morno', flavor: 'Picante', organs: 'Pulmão, Baço, Estômago', actions: 'Aquece o interior, expele o frio, harmoniza o estômago, trata náuseas.' },
    { name: 'Gergelim (Sementes)', temp: 'Neutro', flavor: 'Doce', organs: 'Fígado, Rim', actions: 'Tonifica a Essência e o Sangue, humedece os intestinos.' },
    { name: 'Ginseng', temp: 'Morno', flavor: 'Doce, Amargo', organs: 'Pulmão, Baço', actions: 'Tonifica potentemente o Qi Original, acalma o Shen.' },
    { name: 'Goji Berries', temp: 'Neutro', flavor: 'Doce', organs: 'Fígado, Rim, Pulmão', actions: 'Tonifica o Yin do Fígado e do Rim, beneficia a visão.' },
    { name: 'Grão-de-bico', temp: 'Neutro', flavor: 'Doce', organs: 'Coração, Baço, Rim', actions: 'Tonifica o Qi, nutre o Coração e o Rim.' },
    { name: 'Groselha', temp: 'Neutro', flavor: 'Azedo, Doce', organs: 'Fígado, Pulmão', actions: 'Nutre o Sangue, adstringe.' },
    { name: 'Hortelã', temp: 'Fresco', flavor: 'Picante', organs: 'Pulmão, Fígado', actions: 'Dispersa Vento-Calor, alivia dor de cabeça e garganta, move o Qi do Fígado.' },
    { name: 'Inhame', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Pulmão, Rim', actions: 'Tonifica o Qi e o Yin do Baço, Pulmão e Rim.' },
    { name: 'Iogurte', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Pulmão, Intestino Grosso', actions: 'Gera fluidos, humedece a secura.' },
    { name: 'Javali', temp: 'Neutro', flavor: 'Doce, Salgado', organs: 'Baço, Estômago', actions: 'Tonifica o Baço, humedece a secura.' },
    { name: 'Kiwi', temp: 'Frio', flavor: 'Doce, Azedo', organs: 'Estômago, Bexiga', actions: 'Limpa o Calor, alivia a sede.' },
    { name: 'Laranja', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Pulmão, Estômago', actions: 'Promove fluidos, humedece o Pulmão.' },
    { name: 'Leite de Cabra', temp: 'Morno', flavor: 'Doce', organs: 'Fígado, Estômago', actions: 'Tonifica o Yin, humedece a secura.' },
    { name: 'Leite de Vaca', temp: 'Neutro', flavor: 'Doce', organs: 'Coração, Pulmão, Estômago', actions: 'Tonifica o Sangue e o Yin, promove fluidos.' },
    { name: 'Lentilhas', temp: 'Neutro', flavor: 'Doce', organs: 'Coração, Rim', actions: 'Fortalece o Rim, promove a micção.' },
    { name: 'Lichia', temp: 'Morno', flavor: 'Doce, Azedo', organs: 'Baço, Fígado', actions: 'Tonifica o Sangue, regula o Qi.' },
    { name: 'Limão', temp: 'Fresco', flavor: 'Azedo', organs: 'Fígado, Estômago', actions: 'Move o Qi do Fígado, promove fluidos, harmoniza o Estômago.' },
    { name: 'Linguado', temp: 'Neutro', flavor: 'Doce', organs: 'Baço', actions: 'Tonifica o Qi.' },
    { name: 'Linhaça', temp: 'Neutro', flavor: 'Doce', organs: 'Pulmão, Intestino Grosso', actions: 'Humedece os intestinos, nutre o Yin.' },
    { name: 'Lula', temp: 'Neutro', flavor: 'Salgado, Azedo', organs: 'Fígado, Rim', actions: 'Tonifica o Sangue e o Yin.' },
    { name: 'Lúpulo', temp: 'Frio', flavor: 'Amargo', organs: 'Fígado, Vesícula Biliar', actions: 'Acalma o Fígado, promove a digestão.' },
    { name: 'Maçã', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Pulmão, Baço, Estômago', actions: 'Gera fluidos, humedece o Pulmão, promove a digestão.' },
    { name: 'Macarrão de Trigo', temp: 'Fresco', flavor: 'Doce', organs: 'Coração', actions: 'Limpa o Calor do Coração.' },
    { name: 'Manjericão', temp: 'Morno', flavor: 'Picante', organs: 'Pulmão, Baço, Estômago', actions: 'Liberta o exterior, resolve a Humidade.' },
    { name: 'Manteiga', temp: 'Morno', flavor: 'Doce', organs: 'Pulmão, Intestino Grosso', actions: 'Tonifica o Qi, humedece a secura.' },
    { name: 'Maracujá', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Coração, Fígado', actions: 'Limpa o Calor do Coração, acalma o Shen.' },
    { name: 'Mel', temp: 'Neutro', flavor: 'Doce', organs: 'Pulmão, Baço, Intestino Grosso', actions: 'Humedece o Pulmão e os intestinos, alivia a dor.' },
    { name: 'Melancia', temp: 'Frio', flavor: 'Doce', organs: 'Coração, Estômago, Bexiga', actions: 'Elimina calor de verão, gera fluidos, alivia a sede, promove a micção.' },
    { name: 'Melão', temp: 'Frio', flavor: 'Doce', organs: 'Coração, Estômago', actions: 'Limpa o Calor de Verão, promove a micção.' },
    { name: 'Menta', temp: 'Fresco', flavor: 'Picante', organs: 'Pulmão, Fígado', actions: 'Dispersa Vento-Calor, move o Qi do Fígado.' },
    { name: 'Mexilhão', temp: 'Morno', flavor: 'Salgado', organs: 'Fígado, Rim', actions: 'Tonifica o Fígado e o Rim, nutre a Essência.' },
    { name: 'Milho', temp: 'Neutro', flavor: 'Doce', organs: 'Estômago, Intestino Grosso', actions: 'Tonifica o Qi, promove a micção.' },
    { name: 'Mirtilo', temp: 'Fresco', flavor: 'Azedo, Doce', organs: 'Fígado, Rim', actions: 'Tonifica o Sangue, beneficia os olhos.' },
    { name: 'Morango', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Pulmão, Baço', actions: 'Humedece o Pulmão, gera fluidos.' },
    { name: 'Mostarda (folhas)', temp: 'Morno', flavor: 'Picante', organs: 'Pulmão', actions: 'Resolve a Fleuma-Frio no Pulmão.' },
    { name: 'Nabo', temp: 'Fresco', flavor: 'Picante, Doce', organs: 'Pulmão, Estômago', actions: 'Resolve a Fleuma-Calor, promove a digestão.' },
    { name: 'Nêspera', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Pulmão, Baço', actions: 'Humedece o Pulmão, pára a tosse.' },
    { name: 'Noz', temp: 'Morno', flavor: 'Doce', organs: 'Rim, Pulmão, Intestino Grosso', actions: 'Tonifica o Rim, aquece o Pulmão, humedece os intestinos.' },
    { name: 'Noz-moscada', temp: 'Morno', flavor: 'Picante', organs: 'Baço, Estômago, Intestino Grosso', actions: 'Aquece o centro, pára a diarreia.' },
    { name: 'Ostra', temp: 'Fresco', flavor: 'Salgado', organs: 'Fígado, Rim', actions: 'Nutre o Yin, acalma o Shen, amolece durezas.' },
    { name: 'Ovo de Codorna', temp: 'Neutro', flavor: 'Doce', organs: 'Rim, Pulmão', actions: 'Tonifica o Qi e o Sangue.' },
    { name: 'Ovo de Galinha', temp: 'Neutro', flavor: 'Doce', organs: 'Rim, Baço', actions: 'Tonifica o Sangue e o Yin, humedece a secura.' },
    { name: 'Painço', temp: 'Fresco', flavor: 'Doce, Salgado', organs: 'Baço, Rim, Estômago', actions: 'Tonifica o Baço e o Rim, limpa o Calor.' },
    { name: 'Papaia', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Promove a digestão, fortalece o Estômago.' },
    { name: 'Pato', temp: 'Fresco', flavor: 'Doce, Salgado', organs: 'Pulmão, Rim', actions: 'Tonifica o Yin, promove a micção, reduz o inchaço.' },
    { name: 'Pepino', temp: 'Frio', flavor: 'Doce', organs: 'Pulmão, Estômago, Intestino Grosso', actions: 'Elimina calor, desintoxica, promove a micção.' },
    { name: 'Pera', temp: 'Fresco', flavor: 'Doce', organs: 'Pulmão, Estômago', actions: 'Humedece o Pulmão e a secura, transforma a Fleuma-Calor.' },
    { name: 'Peru', temp: 'Fresco', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Tonifica o Baço, fortalece os tendões.' },
    { name: 'Pêssego', temp: 'Morno', flavor: 'Doce, Azedo', organs: 'Pulmão, Intestino Grosso', actions: 'Move o Sangue, humedece os intestinos.' },
    { name: 'Pimenta Caiena', temp: 'Quente', flavor: 'Picante', organs: 'Coração, Baço', actions: 'Aquece fortemente o interior, dispersa o Frio.' },
    { name: 'Pimenta Preta', temp: 'Quente', flavor: 'Picante', organs: 'Estômago, Intestino Grosso', actions: 'Aquece o centro, alivia a dor.' },
    { name: 'Pimento', temp: 'Morno', flavor: 'Picante', organs: 'Coração, Baço', actions: 'Move o Sangue, alivia a dor.' },
    { name: 'Pinhão', temp: 'Morno', flavor: 'Doce', organs: 'Pulmão, Fígado, Intestino Grosso', actions: 'Humedece o Pulmão e os intestinos.' },
    { name: 'Pistácio', temp: 'Neutro', flavor: 'Doce', organs: 'Rim, Intestino Grosso', actions: 'Tonifica o Qi do Rim.' },
    { name: 'Polvo', temp: 'Neutro', flavor: 'Doce, Salgado', organs: 'Fígado, Rim', actions: 'Tonifica o Sangue.' },
    { name: 'Pombo', temp: 'Morno', flavor: 'Salgado', organs: 'Fígado, Rim', actions: 'Tonifica o Qi e o Sangue, aquece o Yang.' },
    { name: 'Queijo', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Pulmão, Baço', actions: 'Gera fluidos, humedece a secura.' },
    { name: 'Quiabo', temp: 'Fresco', flavor: 'Doce', organs: 'Rim, Bexiga', actions: 'Limpa o Calor, promove a micção.' },
    { name: 'Rabanete', temp: 'Fresco', flavor: 'Picante, Doce', organs: 'Pulmão, Estômago', actions: 'Resolve a Fleuma, promove a digestão.' },
    { name: 'Repolho', temp: 'Neutro', flavor: 'Doce', organs: 'Estômago, Intestino Grosso', actions: 'Harmoniza o Estômago, pára a dor.' },
    { name: 'Requeijão', temp: 'Fresco', flavor: 'Doce', organs: 'Pulmão, Estômago', actions: 'Nutre o Yin, limpa o Calor.' },
    { name: 'Romã', temp: 'Morno', flavor: 'Azedo, Doce', organs: 'Rim, Intestino Grosso', actions: 'Adstringente, pára a diarreia e o sangramento.' },
    { name: 'Rosmaninho', temp: 'Morno', flavor: 'Picante', organs: 'Fígado, Coração', actions: 'Acalma o Shen, move o Qi.' },
    { name: 'Ruibarbo', temp: 'Frio', flavor: 'Amargo', organs: 'Coração, Fígado, Intestino Grosso', actions: 'Drena o Calor, move o Sangue, desbloqueia os intestinos.' },
    { name: 'Salsa', temp: 'Morno', flavor: 'Picante', organs: 'Fígado, Baço', actions: 'Move o Sangue, promove a digestão.' },
    { name: 'Salmão', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Aquece o centro, tonifica o Qi e o Sangue.' },
    { name: 'Salsicha', temp: 'Morno', flavor: 'Salgado', organs: 'Baço, Estômago', actions: 'Tonifica o Qi.' },
    { name: 'Sardinha', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Rim', actions: 'Tonifica o Qi, aquece o centro.' },
    { name: 'Sementes de Abóbora', temp: 'Neutro', flavor: 'Doce', organs: 'Intestino Grosso', actions: 'Expele parasitas.' },
    { name: 'Sementes de Girassol', temp: 'Neutro', flavor: 'Doce', organs: 'Intestino Grosso', actions: 'Humedece os intestinos.' },
    { name: 'Soja (grão)', temp: 'Fresco', flavor: 'Doce', organs: 'Baço, Intestino Grosso', actions: 'Tonifica o Qi, limpa o Calor, desintoxica.' },
    { name: 'Tâmara', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Tonifica o Qi e o Sangue, acalma o Shen.' },
    { name: 'Tangerina', temp: 'Morno', flavor: 'Doce, Picante', organs: 'Pulmão, Baço', actions: 'Regula o Qi, resolve a Fleuma.' },
    { name: 'Tofu', temp: 'Frio', flavor: 'Doce', organs: 'Baço, Estômago, Intestino Grosso', actions: 'Limpa o Calor, humedece a secura, desintoxica.' },
    { name: 'Tomate', temp: 'Fresco', flavor: 'Doce, Azedo', organs: 'Fígado, Estômago', actions: 'Gera fluidos, arrefece o Sangue, acalma o Fígado.' },
    { name: 'Tomilho', temp: 'Morno', flavor: 'Picante', organs: 'Pulmão, Baço', actions: 'Expele Vento-Frio, resolve a Humidade.' },
    { name: 'Trigo', temp: 'Fresco', flavor: 'Doce', organs: 'Coração, Baço, Rim', actions: 'Nutre o Coração, acalma o Shen, limpa o Calor.' },
    { name: 'Trigo Sarraceno', temp: 'Fresco', flavor: 'Doce', organs: 'Baço, Estômago, Intestino Grosso', actions: 'Fortalece o Baço, pára a diarreia.' },
    { name: 'Truta', temp: 'Morno', flavor: 'Doce', organs: 'Baço, Estômago', actions: 'Aquece o centro, tonifica o Qi.' },
    { name: 'Uva', temp: 'Neutro', flavor: 'Doce, Azedo', organs: 'Fígado, Rim, Baço', actions: 'Tonifica o Qi e o Sangue, fortalece os ossos.' },
    { name: 'Vagem', temp: 'Neutro', flavor: 'Doce', organs: 'Baço, Rim', actions: 'Tonifica o Yin, fortalece o Baço.' },
    { name: 'Vinagre', temp: 'Morno', flavor: 'Azedo, Amargo', organs: 'Fígado, Estômago', actions: 'Move o Sangue, remove estagnação, pára o sangramento.' },
].sort((a, b) => a.name.localeCompare(b.name));

// Exporta os dados sobre os padrões de desarmonia Zang-Fu
export const zangFuPatternsData = [
    { id: 'figado', name: 'Fígado', color: 'wood', patterns: [ { name: 'Estagnação de Qi do Fígado', symptoms: 'Distensão e dor nos hipocôndrios, irritabilidade, suspiros frequentes, tensão emocional, pulso em corda. Em mulheres, pode causar TPM com distensão mamária e irregularidades menstruais.', tongue: 'Corpo da língua pode ser normal ou ligeiramente vermelho nas laterais.', pulse: 'Em corda (Xian).', treatmentPrinciple: 'Mover o Qi do Fígado, remover a estagnação, acalmar a mente.' }, { name: 'Subida do Yang do Fígado', symptoms: 'Dores de cabeça (têmporas, atrás dos olhos), tonturas, zumbido (tipo assobio), rosto vermelho, irritabilidade, acessos de raiva. Pode ser uma evolução da Estagnação de Qi ou Deficiência de Yin.', tongue: 'Vermelha, especialmente nas laterais, com saburra amarela fina.', pulse: 'Em corda (Xian), rápido (Shu).', treatmentPrinciple: 'Subjugar o Yang do Fígado, nutrir o Yin, limpar o Calor.' }, { name: 'Fogo do Fígado', symptoms: 'Sintomas de subida do Yang mais intensos. Sede, sabor amargo na boca, obstipação com fezes secas, urina escura, olhos vermelhos, raiva extrema.', tongue: 'Corpo da língua vermelho com laterais mais vermelhas e inchadas, saburra amarela e seca.', pulse: 'Em corda (Xian), rápido (Shu) e cheio (Shi).', treatmentPrinciple: 'Drenar o Fogo do Fígado, limpar o Calor, proteger o Yin.' }, { name: 'Deficiência de Sangue do Fígado', symptoms: 'Visão turva, "moscas volantes", dormência nos membros, cãibras, unhas frágeis e pálidas, períodos menstruais escassos ou amenorreia. Tonturas e tez pálida.', tongue: 'Pálida, especialmente nas laterais, e fina/seca.', pulse: 'Filiforme (Xi) ou em corda e fino.', treatmentPrinciple: 'Nutrir o Sangue do Fígado, tonificar o Fígado.' } ] },
    { id: 'coracao', name: 'Coração', color: 'fire', patterns: [ { name: 'Deficiência de Qi do Coração', symptoms: 'Palpitações (pioram com esforço), falta de ar ao esforço, transpiração espontânea, cansaço, tez pálida.', tongue: 'Pálida, pode ter uma fissura central que chega à ponta.', pulse: 'Vazio (Xu), fraco (Ruo).', treatmentPrinciple: 'Tonificar o Qi do Coração.' }, { name: 'Deficiência de Yang do Coração', symptoms: 'Sintomas de Deficiência de Qi mais sinais de Frio: aversão ao frio, membros frios, lábios azulados, dor no peito (tipo facada).', tongue: 'Pálida ou roxa, húmida.', pulse: 'Profundo (Chen), lento (Chi) ou com nó (Jie).', treatmentPrinciple: 'Tonificar e aquecer o Yang do Coração.' }, { name: 'Deficiência de Sangue do Coração', symptoms: 'Palpitações, insónia (dificuldade em adormecer), ansiedade, memória fraca, tonturas, tez pálida sem brilho.', tongue: 'Pálida e fina.', pulse: 'Filiforme (Xi) ou agitado (Choppy).', treatmentPrinciple: 'Nutrir o Sangue do Coração, acalmar a Mente (Shen).' }, { name: 'Deficiência de Yin do Coração', symptoms: 'Palpitações, insónia (acordar durante a noite), agitação mental, suores noturnos, calor nos 5 palmos, boca e garganta secas.', tongue: 'Vermelha sem saburra, ponta mais vermelha.', pulse: 'Rápido (Shu) e filiforme (Xi).', treatmentPrinciple: 'Nutrir o Yin do Coração, limpar o Calor por Deficiência, acalmar a Mente.' } ] },
    { id: 'baco', name: 'Baço', color: 'earth', patterns: [ { name: 'Deficiência de Qi do Baço', symptoms: 'Falta de apetite, cansaço (piora após comer), distensão abdominal após comer, fezes moles, fraqueza nos membros, tez amarelada.', tongue: 'Pálida com marcas de dentes nas laterais.', pulse: 'Vazio (Xu) ou fraco (Ruo).', treatmentPrinciple: 'Tonificar o Qi do Baço, fortalecer o transporte e a transformação.' }, { name: 'Deficiência de Yang do Baço', symptoms: 'Sintomas de Deficiência de Qi mais sinais de Frio: sensação de frio, membros frios, dor abdominal que melhora com calor, edema.', tongue: 'Pálida, húmida, com marcas de dentes.', pulse: 'Profundo (Chen), lento (Chi) e fraco (Ruo).', treatmentPrinciple: 'Aquecer o Centro, tonificar o Yang do Baço.' }, { name: 'Baço não Controla o Sangue', symptoms: 'Sintomas de Deficiência de Qi mais sinais de hemorragias: hematomas fáceis, sangue nas fezes ou urina, períodos menstruais excessivos.', tongue: 'Pálida.', pulse: 'Filiforme (Xi) e fraco (Ruo).', treatmentPrinciple: 'Tonificar o Qi do Baço, suster o Sangue.' }, { name: 'Colapso do Qi do Baço', symptoms: 'Sintomas de Deficiência de Qi mais sensação de peso e prolapso de órgãos (estômago, útero, ânus).', tongue: 'Pálida.', pulse: 'Vazio (Xu) e fraco (Ruo).', treatmentPrinciple: 'Tonificar o Qi do Baço, elevar o Yang.' } ] },
    { id: 'pulmao', name: 'Pulmão', color: 'metal', patterns: [ { name: 'Deficiência de Qi do Pulmão', symptoms: 'Falta de ar ligeira, voz fraca, tosse fraca, transpiração espontânea durante o dia, aversão ao vento, constipações frequentes.', tongue: 'Pálida.', pulse: 'Vazio (Xu), especialmente na posição do Pulmão.', treatmentPrinciple: 'Tonificar o Qi do Pulmão, fortalecer o Wei Qi.' }, { name: 'Deficiência de Yin do Pulmão', symptoms: 'Tosse seca ou com pouca expectoração, garganta seca, voz rouca, suores noturnos, febre baixa à tarde, maçãs do rosto vermelhas.', tongue: 'Vermelha e descascada, com fissuras.', pulse: 'Flutuante (Fu) e vazio (Xu), ou rápido (Shu) e filiforme (Xi).', treatmentPrinciple: 'Nutrir o Yin do Pulmão, humedecer a secura.' } ] },
    { id: 'rim', name: 'Rim', color: 'water', patterns: [ { name: 'Deficiência de Yang do Rim', symptoms: 'Sensação de frio (especialmente na lombar e joelhos), aversão ao frio, membros frios, impotência, libido diminuída, urina clara e abundante, edema.', tongue: 'Pálida, inchada e húmida.', pulse: 'Profundo (Chen), fraco (Ruo), lento (Chi).', treatmentPrinciple: 'Tonificar e aquecer o Yang do Rim.' }, { name: 'Deficiência de Yin do Rim', symptoms: 'Tonturas, zumbido, memória fraca, suores noturnos, boca e garganta secas, dor lombar, calor nos 5 palmos, obstipação.', tongue: 'Vermelha sem saburra, com fissuras.', pulse: 'Rápido (Shu) e filiforme (Xi).', treatmentPrinciple: 'Nutrir o Yin do Rim, limpar o Calor por Deficiência.' }, { name: 'Deficiência de Essência (Jing) do Rim', symptoms: 'Em crianças: desenvolvimento lento (ossos, dentes, cabelo), atraso mental. Em adultos: envelhecimento prematuro, cabelo grisalho, perda de dentes, memória fraca, infertilidade, senilidade.', tongue: 'Pode variar, mas geralmente reflete deficiência de Yin ou Yang.', pulse: 'Profundo (Chen) e fraco (Ruo).', treatmentPrinciple: 'Nutrir a Essência (Jing).' }, { name: 'Qi do Rim não é Firme', symptoms: 'Incontinência urinária, enurese, micção frequente e clara, ejaculação prematura, espermatorreia, prolapso uterino, abortos espontâneos recorrentes.', tongue: 'Pálida.', pulse: 'Profundo (Chen) e fraco (Ruo).', treatmentPrinciple: 'Consolidar o Qi do Rim.' } ] }
];

// Exporta os dados para as 10+1 perguntas do diagnóstico
export const dezPerguntasData = [
    { title: '1. Calafrios e Febre', content: 'Ajuda a distinguir entre invasão de Frio ou Vento-Calor e a determinar a força do Qi defensivo (Wei Qi).' },
    { title: '2. Transpiração', content: 'Transpiração espontânea durante o dia pode indicar Deficiência de Qi. Suores noturnos podem indicar Deficiência de Yin.' },
    { title: '3. Cabeça e Corpo', content: 'Dores de cabeça (localização, tipo de dor) e dores no corpo ajudam a identificar os meridianos e órgãos afetados.' },
    { title: '4. Fezes e Urina', content: 'A frequência, consistência e cor dão pistas sobre o estado do Baço, Rins e a presença de Frio ou Calor.' },
    { title: '5. Alimentação e Sabor', content: 'Apetite, digestão e preferências de sabor refletem a saúde do Baço e do Estômago.' },
    { title: '6. Peito e Abdómen', content: 'Sensação de opressão, dor ou distensão pode indicar Estagnação de Qi no Fígado, Coração ou Pulmão.' },
    { title: '7. Sono', content: 'Dificuldade em adormecer está muitas vezes ligada à Deficiência de Sangue (Coração/Fígado). Acordar frequentemente durante a noite pode indicar Deficiência de Yin com Calor Vazio.' },
    { title: '8. Sede e Bebida', content: 'A ausência ou presença de sede, e a preferência por bebidas frias ou quentes, ajuda a diferenciar padrões de Frio e Calor.' },
    { title: '9. Audição e Visão', content: 'Zumbido e problemas de visão estão frequentemente ligados ao Rim e ao Fígado.' },
    { title: '10. Emoções', content: 'O estado emocional é um indicador chave. Irritabilidade (Fígado), ansiedade (Coração), preocupação (Baço), etc.' },
    { title: '+1. Ginecologia (para mulheres)', content: 'Ciclo menstrual, cor e quantidade do fluxo, e sintomas associados (TPM) dão informações vitais sobre o estado do Qi, Sangue, e dos Vasos Maravilhosos (Ren Mai, Chong Mai).' }
];

// Exporta os dados sobre os tipos de pulso
export const pulseData = [
    { title: 'Flutuante (Fu)', content: 'Sentido com uma leve pressão, como madeira a flutuar na água. Indica um padrão exterior (ex: invasão de Vento-Frio ou Vento-Calor).' },
    { title: 'Profundo (Chen)', content: 'Só pode ser sentido com pressão forte, perto do osso. Indica um padrão interior (nos órgãos Zang-Fu).' },
    { title: 'Lento (Chi)', content: 'Menos de 4 batidas por ciclo respiratório do terapeuta. Indica um padrão de Frio.' },
    { title: 'Rápido (Shu)', content: 'Mais de 5 batidas por ciclo respiratório. Indica um padrão de Calor.' },
    { title: 'Vazio (Xu)', content: 'Grande, mas sem força, fraco. Indica Deficiência de Qi.' },
    { title: 'Cheio (Shi)', content: 'Largo, forte e longo, sentido com força em todas as profundidades. Indica um padrão de Excesso (ex: excesso de Calor ou Frio).' },
    { title: 'Escorregadio (Hua)', content: 'Flui suavemente, como pérolas a rolar num prato. Indica Fleuma, Humidade, retenção de alimentos ou gravidez.' },
    { title: 'Agitado (Se)', content: 'Áspero e irregular, como raspar bambu com uma faca. Indica Estagnação de Sangue ou deficiência de Jing/Sangue.' },
    { title: 'Em Corda (Xian)', content: 'Tenso e fino, como uma corda de guitarra. É o pulso característico da desarmonia do Fígado (ex: Estagnação de Qi do Fígado).' },
    { title: 'Tenso (Jin)', content: 'Mais forte e vibrante que o pulso em corda, como uma corda esticada. Indica Frio, dor ou retenção de alimentos.' },
];

// NOVO: Exporta os dados sobre Terapias (Versão Aprofundada e Expandida)
export const therapiesData = [
    {
        id: 'fitoterapia',
        title: 'Fitoterapia Chinesa (中药)',
        content: `<div class="card-prose">
            <p class="mb-4">A <strong>Fitoterapia Chinesa</strong> (Zhong Yao) é um dos pilares mais sofisticados e importantes da Medicina Chinesa. Utiliza uma vasta matéria médica de plantas, minerais e, ocasionalmente, substâncias animais para criar fórmulas personalizadas que tratam padrões de desarmonia específicos. Ao contrário da fitoterapia ocidental, as ervas raramente são usadas isoladamente; o seu poder reside na sinergia complexa das fórmulas.</p>
            
            <h4 class="font-bold text-lg mt-6 mb-2">As 4 Naturezas e os 5 Sabores</h4>
            <p class="text-sm mb-3">Cada erva é classificada por suas propriedades energéticas para garantir um tratamento preciso:</p>
            <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>As Quatro Naturezas (四气 Si Qi):</strong> Descrevem o efeito da erva na temperatura do corpo. São elas: Quente (热), Morna (温), Fresca (凉) e Fria (寒). Uma erva fria como a Hortelã (Bo He) é usada para limpar calor, enquanto uma erva quente como o Gengibre Seco (Gan Jiang) é usada para expelir o frio.</li>
                <li><strong>Os Cinco Sabores (五味 Wu Wei):</strong> Indicam a ação da erva no corpo. São eles: <strong>Doce</strong> (tonifica), <strong>Picante</strong> (move e dispersa), <strong>Amargo</strong> (drena e seca), <strong>Azedo</strong> (adstringe) e <strong>Salgado</strong> (amolece e purga).</li>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">Princípios da Formulação: A Hierarquia Imperial</h4>
            <p class="text-sm mb-3">Uma fórmula clássica é estruturada como uma equipa bem organizada para maximizar a eficácia e minimizar os efeitos secundários:</p>
            <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>Imperador (Jun 君):</strong> A erva principal, que visa a queixa principal do padrão.</li>
                <li><strong>Ministro (Chen 臣):</strong> Assiste o Imperador, tratando queixas secundárias ou reforçando o efeito principal.</li>
                <li><strong>Assistente (Zuo 佐):</strong> Modera a toxicidade do Imperador/Ministro, trata aspetos menos importantes ou tem um efeito oposto para equilibrar a fórmula.</li>
                <li><strong>Mensageiro (Shi 使):</strong> Guia as outras ervas para um meridiano ou área específica do corpo e harmoniza a fórmula.</li>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">Fórmulas Clássicas Essenciais</h4>
            <div class="space-y-5">
                <div>
                    <h5 class="font-semibold">1. Si Jun Zi Tang (四君子汤) - Sopa dos Quatro Cavalheiros</h5>
                    <p class="text-sm italic mb-2">A fórmula base para tonificar o Qi do Baço e do Estômago.</p>
                    <ul class="list-disc list-inside text-sm">
                        <li><strong>Ações:</strong> Tonifica o Qi, fortalece o Baço.</li>
                        <li><strong>Indicações:</strong> Falta de apetite, fezes moles, cansaço, voz fraca, tez pálida.</li>
                        <li><strong>Composição:</strong> Ren Shen (Imperador), Bai Zhu (Ministro), Fu Ling (Assistente), Zhi Gan Cao (Mensageiro).</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">2. Si Wu Tang (四物汤) - Sopa das Quatro Substâncias</h5>
                    <p class="text-sm italic mb-2">A fórmula base para tonificar o Sangue, especialmente do Fígado.</p>
                    <ul class="list-disc list-inside text-sm">
                        <li><strong>Ações:</strong> Tonifica e regula o Sangue.</li>
                        <li><strong>Indicações:</strong> Tonturas, visão turva, tez pálida, palpitações, irregularidades menstruais com sangue escasso.</li>
                        <li><strong>Composição:</strong> Shu Di Huang (Imperador), Dang Gui (Ministro), Bai Shao (Assistente), Chuan Xiong (Mensageiro).</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">3. Ba Zhen Tang (八珍汤) - Sopa dos Oito Tesouros</h5>
                    <p class="text-sm italic mb-2">Combina as duas fórmulas anteriores para tratar a deficiência simultânea de Qi e Sangue.</p>
                    <ul class="list-disc list-inside text-sm">
                        <li><strong>Ações:</strong> Tonifica potentemente tanto o Qi como o Sangue.</li>
                        <li><strong>Indicações:</strong> Cansaço extremo, palpitações com ansiedade, tonturas, falta de apetite, tez pálida ou amarelada, falta de ar.</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">4. Xiao Yao San (逍遙散) - Pó do Passeio Despreocupado</h5>
                    <p class="text-sm italic mb-2">A fórmula mais famosa para a Estagnação de Qi do Fígado com Deficiência de Sangue subjacente.</p>
                    <ul class="list-disc list-inside text-sm">
                        <li><strong>Ações:</strong> Suaviza o Fígado, move o Qi, fortalece o Baço e nutre o Sangue.</li>
                        <li><strong>Indicações:</strong> Irritabilidade, suspiros, distensão no peito e hipocôndrios, TPM, dores de cabeça tensionais, cansaço.</li>
                        <li><strong>Modificação Comum:</strong> Se houver sinais de calor (boca amarga, olhos vermelhos), adiciona-se Mu Dan Pi e Zhi Zi, tornando-se <strong>Jia Wei Xiao Yao San</strong>.</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">5. Liu Wei Di Huang Wan (六味地黄丸) - Pílulas de Rehmannia das Seis Ervas</h5>
                    <p class="text-sm italic mb-2">A fórmula base para nutrir o Yin do Rim e do Fígado.</p>
                    <ul class="list-disc list-inside text-sm">
                        <li><strong>Ações:</strong> Nutre o Yin do Rim e do Fígado de forma equilibrada.</li>
                        <li><strong>Indicações:</strong> Dor lombar, tonturas, zumbido, suores noturnos, calor nos 5 palmos, boca seca, sede.</li>
                        <li><strong>Composição (3 tónicas, 3 drenantes):</strong> Shu Di Huang (Imperador), Shan Zhu Yu, Shan Yao (Ministros), Ze Xie, Mu Dan Pi, Fu Ling (Assistentes).</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">6. Gui Pi Tang (归脾汤) - Sopa para Restaurar o Baço</h5>
                    <p class="text-sm italic mb-2">Fórmula magistral para deficiência de Qi e Sangue do Coração e Baço.</p>
                    <ul class="list-disc list-inside text-sm">
                        <li><strong>Ações:</strong> Tonifica o Qi e o Sangue, fortalece o Baço e nutre o Coração.</li>
                        <li><strong>Indicações:</strong> Palpitações com ansiedade, insónia (dificuldade em adormecer), pensamentos obsessivos, memória fraca, cansaço, falta de apetite, tez pálida. Muito usada para "excesso de estudo/trabalho mental".</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">7. Xue Fu Zhu Yu Tang (血府逐瘀汤) - Decocção para Expelir Estase da Mansão do Sangue</h5>
                    <p class="text-sm italic mb-2">Uma fórmula poderosa para mover a estagnação de Sangue no peito (Aquecedor Superior).</p>
                    <ul class="list-disc list-inside text-sm">
                        <li><strong>Ações:</strong> Move o Sangue, promove a circulação de Qi, alivia a dor.</li>
                        <li><strong>Indicações:</strong> Dor fixa e em facada no peito ou hipocôndrios, dores de cabeça crónicas, soluços persistentes, palpitações, insónia, alterações de humor extremas.</li>
                    </ul>
                </div>
            </div>
            <h4 class="font-bold text-lg mt-6 mb-2">Segurança e Prática</h4>
            <p class="text-sm">A fitoterapia chinesa é segura e eficaz quando prescrita por um profissional qualificado. A automedicação é desaconselhada, pois um diagnóstico incorreto pode levar a resultados indesejados. O terapeuta ajustará a fórmula à medida que a sua condição evolui.</p>
        </div>`
    },
    {
        id: 'acupuntura',
        title: 'Acupuntura (针灸)',
        content: `<div class="card-prose">
            <p class="mb-4">A <strong>Acupuntura</strong> (Zhen Jiu, que significa "agulha e moxa") é a prática de inserir agulhas muito finas em pontos específicos do corpo (os "acupontos") para estimular e reequilibrar o fluxo de Qi nos meridianos. É a terapia da Medicina Chinesa mais conhecida no Ocidente.</p>
            
            <h4 class="font-bold text-lg mt-6 mb-2">O Conceito de Deqi (得气)</h4>
            <p class="text-sm mb-3"><em>Deqi</em>, ou a "Chegada do Qi", é a sensação que o paciente e/ou o terapeuta sentem quando a agulha estimula corretamente o ponto. É um sinal de que a terapia está a ser eficaz. As sensações podem incluir peso, dormência, dor ligeira, calor ou uma sensação de corrente elétrica ao longo do meridiano.</p>

            <h4 class="font-bold text-lg mt-6 mb-2">Categorias de Pontos de Acupuntura</h4>
            <p class="text-sm mb-3">Existem centenas de pontos, mas eles podem ser agrupados em categorias funcionais:</p>
            <ul class="list-disc list-inside text-sm space-y-2">
                <li><strong>Pontos Ashi (阿是穴):</strong> Literalmente "Ah, sim!". São pontos dolorosos à palpação que não estão necessariamente nos meridianos clássicos. São usados principalmente para tratar a dor local.</li>
                <li><strong>Pontos dos Cinco Shu (五输穴):</strong> Localizados abaixo dos cotovelos e joelhos, são 5 pontos em cada um dos 12 meridianos principais. Comparam o fluxo de Qi a um rio, desde a "nascente" (ponto Jing-Poço) até ao "mar" (ponto He-Mar). São extremamente dinâmicos e usados para tratar uma vasta gama de condições.</li>
                <li><strong>Pontos Fonte-Yuan (原穴):</strong> Onde o Qi Original (Yuan Qi) se acumula. São primordiais para tonificar os órgãos Zang-Fu e diagnosticar a sua condição.</li>
                <li><strong>Pontos de Conexão-Luo (络穴):</strong> Ligam os meridianos acoplados (Yin/Yang, ex: Pulmão e Intestino Grosso) e são usados para tratar desequilíbrios entre eles.</li>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">Pontos Famosos e as Suas Funções</h4>
            <ul class="list-disc list-inside text-sm space-y-2">
                <li><strong>IG4 (Hegu - Vale da Junção):</strong> O "ponto do analgésico". Mestre para a face e boca, trata dores de cabeça, dores de dentes, sinusite. Move potentemente o Qi e o Sangue. Contraindicado na gravidez.</li>
                <li><strong>F3 (Taichong - Grande Impulso):</strong> O "ponto do relaxamento". Abre os "Quatro Portões" (com IG4) para mover o Qi por todo o corpo. Acalma a mente, suaviza o Fígado, trata stress, irritabilidade, TPM e dores de cabeça.</li>
                <li><strong>E36 (Zusanli - Três Li da Perna):</strong> O "ponto da longevidade". Fortalece o corpo inteiro, tonifica o Qi e o Sangue, harmoniza o Estômago e o Baço e reforça a imunidade.</li>
                <li><strong>PC6 (Neiguan - Barreira Interna):</strong> O "ponto anti-náusea". Acalma o Coração e o Shen. Trata náuseas, vómitos, ansiedade, palpitações e insónia.</li>
            </ul>
        </div>`
    },
    {
        id: 'moxabustao',
        title: 'Moxabustão (灸)',
        content: `<div class="card-prose">
            <p class="mb-4">A <strong>Moxabustão</strong> (Jiǔ) é uma terapia de calor que utiliza a erva seca <strong>Artemisia Vulgaris (艾叶 Ai Ye)</strong>. O calor gerado pela sua combustão lenta penetra profundamente nos meridianos para aquecer, mover e tonificar o Qi e o Sangue, sendo especialmente eficaz para condições de Frio e Deficiência.</p>
            
            <h4 class="font-bold text-lg mt-6 mb-2">Porquê Artemísia (Ai Ye)?</h4>
            <p class="text-sm mb-3">A Artemísia é escolhida pelas suas propriedades únicas: produz um calor infravermelho que penetra profundamente, queima de forma uniforme e lenta, e a sua natureza energética é Morna e Picante, o que a torna ideal para mover o Qi e dispersar o Frio.</p>

            <h4 class="font-bold text-lg mt-6 mb-2">Métodos de Aplicação</h4>
            <ul class="list-disc list-inside text-sm space-y-2">
                <li><strong>Moxa Indireta com Bastão:</strong> O método mais comum. Um bastão de moxa é aceso e mantido a alguns centímetros da pele, sobre o ponto de acupuntura, até a área ficar quente e avermelhada.</li>
                <li><strong>Moxa sobre Agulha:</strong> Um pequeno cone de moxa é colocado na ponta de uma agulha de acupuntura já inserida. O calor é conduzido pela agulha para o interior do ponto, combinando os efeitos das duas terapias.</li>
                <li><strong>Moxa sobre Gengibre/Alho:</strong> Uma fatia de gengibre ou alho é colocada na pele e um cone de moxa queima sobre ela. O gengibre é usado para problemas digestivos e vómitos. O alho é usado para infeções cutâneas.</li>
                <li><strong>Caixa de Moxa:</strong> Uma caixa de madeira com uma rede metálica no fundo é colocada sobre uma área do corpo (como o abdómen ou as costas). A moxa queima dentro da caixa, aquecendo uma grande área de forma segura e confortável.</li>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">Pontos-Chave e Aplicações Terapêuticas</h4>
            <ul class="list-disc list-inside text-sm space-y-2">
                <li><strong>E36 (Zusanli):</strong> Para fortalecer a imunidade e a digestão.</li>
                <li><strong>VC4 (Guanyuan):</strong> Para fortalecer a energia vital (Yuan Qi) e tratar problemas ginecológicos e urológicos de natureza Fria.</li>
                <li><strong>VC8 (Shenque - sobre sal):</strong> Para "resgatar o Yang" em casos de colapso, como diarreia crónica por frio.</li>
                <li><strong>VG4 (Mingmen):</strong> Para aquecer o "Fogo do Rim", tratando dor lombar por frio e impotência.</li>
                <li><strong>B67 (Zhiyin):</strong> Famoso pela sua eficácia em virar fetos em apresentação pélvica.</li>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">Precauções e Contraindicações</h4>
            <p class="text-sm mb-3">A segurança é primordial. A moxa é uma terapia de calor e, como tal, é contraindicada em:</p>
            <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>Síndromes de Excesso de Calor ou Deficiência de Yin.</strong></li>
                <li><strong>Pontos perto de órgãos dos sentidos e grandes vasos sanguíneos.</strong></li>
                <li><strong>Abdómen e região lombo-sagrada em mulheres grávidas</strong> (exceto para indicações específicas).</li>
                <li><strong>Pele irritada ou feridas abertas.</strong></li>
            </ul>
        </div>`
    },
    {
        id: 'ventosaterapia',
        title: 'Ventosaterapia (拔罐)',
        content: `<div class="card-prose">
            <p class="mb-4">A <strong>Ventosaterapia</strong> (Bá Guàn) é um método terapêutico antigo no qual se cria um vácuo parcial em copos, que são depois aplicados na pele. A sucção resultante puxa a pele e as camadas superficiais dos músculos, promovendo um fluxo vigoroso de Qi e Sangue na área, aliviando a dor e expelindo fatores patogénicos.</p>
            
            <h4 class="font-bold text-lg mt-6 mb-2">Mecanismo de Ação</h4>
            <p class="text-sm mb-3">Ao criar uma congestão local, a ventosaterapia força o corpo a iniciar um processo de cura. O vácuo:</p>
            <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>Move a Estagnação:</strong> Liberta bloqueios de Qi, Sangue e Fluidos que causam dor.</li>
                <li><strong>Puxa Patógenos para a Superfície:</strong> Ajuda a expelir fatores patogénicos externos, como o Vento-Frio, sendo útil nas fases iniciais de constipações e gripes.</li>
                <li><strong>Estimula o Sistema Nervoso:</strong> A sucção tem um efeito relaxante no sistema nervoso, aliviando a tensão muscular.</li>
                <li><strong>Aumenta a Circulação Sanguínea:</strong> Melhora a oxigenação e nutrição dos tecidos locais.</li>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">Tipos de Ventosaterapia</h4>
            <ul class="list-disc list-inside text-sm space-y-2">
                <li><strong>Ventosaterapia Fixa (Seca):</strong> Os copos são aplicados e deixados no mesmo local por 5-15 minutos. Ideal para pontos específicos ou áreas de dor localizada.</li>
                <li><strong>Ventosaterapia Deslizante:</strong> Aplica-se um óleo na pele e os copos são deslizados sobre uma área maior (como as costas), atuando como uma massagem profunda para libertar a fáscia e os músculos.</li>
                <li><strong>Ventosaterapia Rápida (Flash Cupping):</strong> O copo é aplicado e removido rapidamente várias vezes na mesma área. É uma técnica mais estimulante, usada para tonificar áreas com deficiência ou para tratar paralisia facial.</li>
                <li><strong>Ventosaterapia com Sangria (Húmida):</strong> Faz-se uma pequena picada na pele com uma lanceta antes de aplicar o copo para extrair uma pequena quantidade de sangue estagnado. É muito eficaz para condições de calor tóxico e estase severa.</li>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">Interpretação das Marcas (Sha)</h4>
            <p class="text-sm mb-3">As marcas (equimoses) deixadas pelas ventosas são um indicador diagnóstico valioso. A cor e intensidade revelam o tipo e a severidade da estagnação na área:</p>
            <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>Vermelho Claro/Rosa:</strong> Estagnação leve ou deficiência de base.</li>
                <li><strong>Vermelho Vivo:</strong> Presença de Calor.</li>
                <li><strong>Roxo Escuro/Preto:</strong> Estagnação de Sangue severa e Frio.</li>
                <li><strong>Manchas Roxas:</strong> Estagnação de Sangue.</li>
                <li><strong>Marcas com Bolhas de Água:</strong> Presença de Humidade patogénica.</li>
                <p class="text-xs italic mt-2">As marcas não são hematomas (não há dano no vaso sanguíneo) e geralmente desaparecem em 3 a 7 dias sem dor.</p>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">Cuidados Pós-Tratamento</h4>
            <p class="text-sm">Após uma sessão, é crucial proteger a área tratada. Os poros da pele estão abertos, tornando a área vulnerável à invasão de Vento e Frio. Recomenda-se manter a área coberta e quente, evitar correntes de ar e banhos frios por pelo menos 24 horas, e manter-se bem hidratado.</p>
        </div>`
    },
    {
        id: 'qigong',
        title: 'Qigong & Tai Chi (气功 & 太极)',
        content: `<div class="card-prose">
            <p class="mb-4"><strong>Qigong</strong> (Trabalho da Energia) e <strong>Tai Chi Chuan</strong> (Punho do Supremo Último) são práticas corporais e mentais que cultivam e equilibram a energia vital (Qi). Embora distintos, partilham os mesmos princípios fundamentais de movimento consciente, respiração profunda e foco mental para promover a saúde e a harmonia interna.</p>

            <h4 class="font-bold text-lg mt-6 mb-2">Qigong: A Arte de Cultivar a Energia</h4>
            <p class="text-sm mb-3">O Qigong foca-se na repetição de movimentos específicos ou posturas estáticas para atingir um objetivo terapêutico claro. Pode ser classificado em diferentes categorias:</p>
            <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>Qigong Médico:</strong> O mais relevante clinicamente, focado na prevenção e tratamento de doenças específicas.</li>
                <li><strong>Qigong Marcial:</strong> Usado para desenvolver força interna (Jin), resistência e poder para as artes marciais.</li>
                <li><strong>Qigong Espiritual:</strong> Praticado em escolas Taoistas e Budistas para fins de meditação e iluminação.</li>
            </ul>

            <h5 class="font-semibold mt-4 mb-2">Práticas Fundamentais de Qigong</h5>
            <div class="space-y-4">
                <div>
                    <h6 class="font-semibold">1. Zhan Zhuang (站桩 - Postura da Árvore)</h6>
                    <p class="text-sm italic my-2">É a prática de ficar de pé numa postura específica por longos períodos. Parece simples, mas é um método extremamente poderoso para construir energia interna, fortalecer o corpo, acalmar a mente e desenvolver o enraizamento.</p>
                </div>
                <div>
                    <h6 class="font-semibold">2. Ba Duan Jin (八段锦 - As Oito Peças de Brocado)</h6>
                    <p class="text-sm italic my-2">Uma das séries de Qigong mais populares, composta por oito movimentos fluidos que alongam os tendões, regulam os órgãos e promovem o fluxo suave de Qi.</p>
                </div>
                <div>
                    <h6 class="font-semibold">3. Liu Zi Jue (六字訣 - Os Seis Sons Curativos)</h6>
                    <p class="text-sm italic my-2">Uma prática que combina posturas simples com a vibração de seis sons específicos para limpar, regular e tonificar os principais órgãos Zang-Fu. Cada som vibra numa frequência que ressoa com um órgão.</p>
                </div>
            </div>
            
            <hr class="my-6">

            <h4 class="font-bold text-lg mt-4 mb-2">Tai Chi Chuan: A Meditação em Movimento</h4>
            <p class="text-sm mb-3">O Tai Chi é uma sequência fluida de movimentos (a "forma") que integra princípios marciais, de saúde e filosóficos. É mais complexo que o Qigong, mas oferece benefícios profundos de coordenação, equilíbrio e enraizamento.</p>
            
            <h4 class="font-bold text-lg mt-6 mb-2">As Oito Forças (八劲 - Bā Jìn)</h4>
            <p class="text-sm mb-3">As Oito Forças são as qualidades energéticas fundamentais que se manifestam em todas as técnicas. As 4 primeiras são as cardeais e as 4 seguintes as de canto.</p>
            <ul class="list-disc list-inside text-sm space-y-2">
                <li><strong>Péng (掤) - Aparar/Força Expansiva:</strong> A força primária, sempre presente. Uma energia radial, como uma bola a ser insuflada, que absorve e redireciona a força do oponente.</li>
                <li><strong>Lǚ (捋) - Rolar para Trás/Desviar:</strong> A força de ceder. Em vez de opor, "cola-se" à força do adversário e desvia-a para o lado, causando desequilíbrio.</li>
                <li><strong>Jǐ (擠) - Pressionar/Comprimir:</strong> Uma força de projeção curta e direta, usando o enraizamento e a rotação da cintura para comprimir e projetar o oponente.</li>
                <li><strong>Àn (按) - Empurrar para Baixo:</strong> Uma força pesada e descendente que visa quebrar a estrutura e o enraizamento do adversário.</li>
                <li><strong>Cǎi (採) - Puxar para Baixo/Colher:</strong> Uma força súbita e curta de puxar para baixo, como "colher uma fruta", para quebrar a postura do oponente.</li>
                <li><strong>Liè (裂) - Separar/Dividir:</strong> Uma força de torção em direções opostas, que "divide" a estrutura do adversário.</li>
                <li><strong>Zhǒu (肘) - Cotovelada:</strong> Força curta e penetrante com o cotovelo, para combate a curta distância.</li>
                <li><strong>Kào (靠) - Ombrada/Apoiar-se:</strong> O uso do ombro, anca ou costas para golpear ou projetar o oponente a curta distância.</li>
            </ul>

            <h4 class="font-bold text-lg mt-6 mb-2">O "Segredo" do Tai Chi: O Verdadeiro Significado de Sōng (松)</h4>
            <p class="text-sm mb-3">Muitos traduzem <strong>Sōng</strong> como "relaxar", mas esta é uma tradução perigosamente incompleta. Sōng não é ficar mole ou flácido. É um <strong>processo ativo de libertação profunda e consciente da tensão *dentro* das articulações</strong>. É a prática de "afundar" o peso através do esqueleto, permitindo que a gravidade conecte o corpo ao chão. Este estado de "relaxamento estruturado" é o que permite sentir a força do oponente (Ting Jin) e gerar a verdadeira Força Interna (Jin), que nasce da terra, é governada pela cintura e expressa-se nas mãos. O aprofundamento do Sōng é o que distingue o praticante avançado do iniciante.</p>

        </div>`
    }
];
