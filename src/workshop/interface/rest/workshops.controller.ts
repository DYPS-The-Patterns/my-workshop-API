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
import { WorkshopService } from '../../domain/services/workshop.service';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Workshop } from '../../domain/entities/workshop.model';
import { WorkshopDto } from '../../application/transform/dto/workshop.dto';
import { CreateWorkshopDto } from '../../application/transform/dto/create-workshop.dto';
import { UpdateWorkshopDto } from '../../application/transform/dto/update-workshop.dto';

@Controller('api/v1/workshops')
export class WorkshopsController {
  constructor(
    private readonly workshopsService: WorkshopService,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  @Get()
  async getAllWorkshops() {
    const workshops = await this.workshopsService.findAll();
    const resources = workshops.map((workshop) =>
      this.mapper.map(workshop, Workshop, WorkshopDto),
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Appointments fetched successfully',
      workshops: resources,
    };
  }

  @Post()
  async createWorkshop(@Body() createWorkshopDto: CreateWorkshopDto) {
    const workshop = this.mapper.map(
      createWorkshopDto,
      CreateWorkshopDto,
      Workshop,
    );
    console.log(workshop);
    const result = await this.workshopsService.create(workshop);
    const resource = this.mapper.map(workshop, Workshop, WorkshopDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Appointment created successfully',
      workshop: resource,
    };
  }

  @Get(':id')
  async getWorkshopById(@Param('id') id: number) {
    const workshop = await this.workshopsService.getById(id);
    const resource = this.mapper.map(workshop, Workshop, WorkshopDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Appointment fetched successfully',
      workshop: resource,
    };
  }

  @Put(':id')
  async updateWorkshop(
    @Param('id') id: number,
    @Body() updateWorkshopDto: UpdateWorkshopDto,
  ) {
    const workshop = this.mapper.map(
      updateWorkshopDto,
      UpdateWorkshopDto,
      Workshop,
    );
    const result = await this.workshopsService.update(id, workshop);
    const resource = this.mapper.map(result, Workshop, WorkshopDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Appointment updated successfully',
      workshop: resource,
    };
  }

  @Patch(':id')
  async partiallyUpdateWorkshop(
    @Param('id') id: number,
    @Body() updateWorkshopDto: Partial<UpdateWorkshopDto>,
  ) {
    const workshop = this.mapper.map(
      updateWorkshopDto,
      UpdateWorkshopDto,
      Workshop,
    );
    const result = await this.workshopsService.update(id, workshop);
    const resource = this.mapper.map(result, Workshop, WorkshopDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Appointment updated successfully',
      workshop: resource,
    };
  }

  @Delete(':id')
  async deleteWorkshop(@Param('id') id: number) {
    await this.workshopsService.delete(id);
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: 'Appointment deleted successfully',
    };
  }
}
