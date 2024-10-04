import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module';
import { PrismaProduto } from './prisma.produto';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [PrismaProduto]

})
export class ProdutoModule {}
