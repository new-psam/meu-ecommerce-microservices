import express from 'express';
//import { tokens} from '../../../libs/shared-ui/src/index'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = express();

app.get('/api', (req, res) => {
  res.send({ 
    message: 'Bem-vindo (marcelino) ao API Gateway do meu-ecommerce!',
    versao: '1.0.0', 
  });
});

// Reta para o frontend consultar configurações e cores
app.get('/api/config', (req, res) => {
  res.send({
    status: 'online',
    theme: {
      primaryColor: '#FF4785'//tokens.colors.primary,
      //secondaryColor: tokens.colors.secondary,
    },
  });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
