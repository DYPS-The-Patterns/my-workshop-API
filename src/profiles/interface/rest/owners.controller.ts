import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { OwnersService } from '../../domain/services/owners.service';
import { UpdateOwnerDto } from '../../application/transform/dto/update-owner.dto';
import { Owner } from '../../domain/entities/owner.model';
import { OwnerDto } from '../../application/transform/dto/owner.dto';
import { CreateOwnerDto } from '../../application/transform/dto/create-owner.dto';

@Controller('api/v1/owners')
@ApiTags('Owners')
export class OwnersController {
  constructor(
    private readonly ownersService: OwnersService,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}
  @Get()
  async getAllUsers() {
    const owners = await this.ownersService.getAll();
    const resources = owners.map((owner) =>
      this.mapper.map(owner, Owner, OwnerDto),
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Owners fetched successfully',
      owners: resources,
    };
  }

  @Post()
  async createOwner(@Body() createOwnerDto: CreateOwnerDto) {
    const owner = this.mapper.map(createOwnerDto, CreateOwnerDto, Owner);
    console.log(owner);
    const result = await this.ownersService.create(owner);
    const resource = this.mapper.map(owner, Owner, OwnerDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Owner created successfully',
      owner: resource,
    };
  }

  @Get(':id')
  async getOwnerById(@Param('id') id: number) {
    const owner = await this.ownersService.getById(id);
    const resource = this.mapper.map(owner, Owner, OwnerDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Owner fetched successfully',
      owner: resource,
    };
  }

  @Put(':id')
  async updateOwner(
    @Param('id') id: number,
    @Body() updateOwnerDto: UpdateOwnerDto,
  ) {
    const owner = this.mapper.map(updateOwnerDto, UpdateOwnerDto, Owner);
    const result = await this.ownersService.update(id, owner);
    const resource = this.mapper.map(result, Owner, OwnerDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Owner updated successfully',
      owner: resource,
    };
  }

  @Patch(':id')
  async partiallyUpdateOwner(
    @Param('id') id: number,
    @Body() updateOwnerDto: Partial<UpdateOwnerDto>,
  ) {
    const owner = this.mapper.map(updateOwnerDto, UpdateOwnerDto, Owner);
    const result = await this.ownersService.update(id, owner);
    const resource = this.mapper.map(result, Owner, OwnerDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Owner updated successfully',
      owner: resource,
    };
  }

  @Delete(':id')
  async deleteOwner(@Param('id') id: number) {
    await this.ownersService.delete(id);
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: 'Owner deleted successfully',
    };
  }
}
