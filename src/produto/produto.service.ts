import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { Repository } from 'typeorm';
import { ListaProdutoDTO } from './dto/ListaProduto.dto';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async listProdutos() {
    const produtosSalvos = await this.produtoRepository.find();
    const produtoLista = produtosSalvos.map(
      (produto) => new ListaProdutoDTO(produto.id, produto.nome),
    );

    return produtoLista;
  }

  async listId(id: string) {
    const serachId = await this.produtoRepository.findOneBy({ id });
    return serachId;
  }

  async criarProduto(produtoEntity: ProdutoEntity) {
    await this.produtoRepository.save(produtoEntity);
  }

  async atualizaProduto(id: string, novosDados: AtualizaProdutoDTO) {
    const entityName = await this.produtoRepository.findOneBy({ id });
    Object.assign(entityName, novosDados);
    await this.produtoRepository.save(entityName);
  }

  async deletaProduto(id: string) {
    const searchId = await this.produtoRepository.findOneBy({ id });
    const message = !searchId
      ? 'produto inexistente!'
      : (await this.produtoRepository.delete(id), 'produto deletado');
    return {
      mensagem: message,
      produto: searchId,
    };
  }
}
