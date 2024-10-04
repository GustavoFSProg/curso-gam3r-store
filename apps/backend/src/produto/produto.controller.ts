import { Produto } from '../../../../packages/core/dist';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PrismaProduto } from './prisma.produto';

@Controller('produtos')
export class ProdutoController {
    constructor(private readonly repo: PrismaProduto) {}

    @Post()
    salvarProduto(@Body() produto: Produto): Promise<void> {
      return this.repo.salvar(produto);
    }
  
    @Get()
    obterProdutos(): Promise<Produto[]> {
      return this.repo.obter();
    }
  
    @Get(':id')
    obterProduto(@Param('id') id: string): Promise<Produto> {
      return this.repo.obterPorId(+id);
    }
  
    @Delete(':id')
    excluirProduto(@Param('id') id: string): Promise<void> {
      return this.repo.excluir(+id);
    }

}
