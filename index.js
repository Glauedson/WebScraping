const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
const PORTA = 3000

async function rasparAmazon(url) {
    try {
        const { data } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        })
        const $ = cheerio.load(data)
        
        const containerPreco = $('.a-section.a-spacing-none.aok-align-center.aok-relative').first()
        let parteInteira = containerPreco.find('.a-price-whole').text().trim()
        let parteDecimal = containerPreco.find('.a-price-fraction').text().trim()

        let preco = parteInteira && parteDecimal ? `R$ ${parteInteira}${parteDecimal}` : 'Preço não encontrado'

        return preco
    } catch (erro) {
        return 'Erro ao obter preço'
    }
}

async function rasparNovaTec(url) {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        
        let dado = $('span[itemprop="price"]').text().trim()
        let preco = dado ? `R$ ${dado}` : 'Preço não encontrado'
        
        return preco
    } catch (erro) {
        return 'Erro ao obter preço'
    }
}

app.get('/livros', async (req, res) => {

    const urlAmazon = 'https://www.amazon.com.br/Programação-web-Node-Express-Beneficiando-se/dp/6586057086/ref=sr_1_1?crid=1SF6SG4OJ3JJV&dib=eyJ2IjoiMSJ9.OMfPv2X6hCc_9TYZ6xuL3eBLFhSQuGuPsZ9nbJaE6s5TM0dzYET2aYXgUVvDeBu89wXLofwOElVeznmNsfI1DeMUvCBvtCueflENK0O9QDcLB-whR7F-pSd8m1s4No9v4zMHSxbatrD36SCZXX8Ewc6KIVfNseSMvVPiGZKIaq1jNVfUM-LOFKu1nlpdY9v2Mx5u9Kjfz_jmSvM-PfwJSA63SfDXSkGOMK03NPpG10q1VT0BApjBGgpD_vND1NIPNOsQg5mqQ5p5crKqetXy1KmuTSGPq4EqS_wDIoH91vCYv7NXiZWDFROFZ6GyxAureriaSAPZtuZzSu5LWdkJxUeVYifDXKZwq_w7-3QLhP7FbqvomeCDgdb1q8f4SsxGKIt7F8DKDV2cCH65aNxiH59EFl5gM1Z4yl-JTp-aMa0H2jYLxF5b-lQ5QnrZp-5x.Y-DTIeScCnDD-qhyQyC1iJrtFyfu11tmEDOWFvTjPEM&dib_tag=se&keywords=node+express&qid=1741567668&sprefix=node+%2Caps%2C167&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
    const urlNovaTec = 'https://novatec.com.br/livros/programacao-web-com-node-express/'

    const precoAmazon = await rasparAmazon(urlAmazon)
    const precoNovaTec = await rasparNovaTec(urlNovaTec)

    res.json({
        livro: "Programação web com Node e Express: Beneficiando-se da Stack JavaScript",
        editora: "NovaTec",
        escritor: "Ethan Brown",
        precos: {
            Amazon: precoAmazon,
            NovaTec: precoNovaTec
        }
    })
})

app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`))
