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
import { DriversService } from '../../domain/services/drivers.service';
import { DriverDto } from '../../application/transform/dto/driver.dto';
import { Driver } from '../../domain/entities/driver.model';
import { CreateDriverDto } from '../../application/transform/dto/create-driver.dto';
import { UpdateDriverDto } from '../../application/transform/dto/update-driver.dto';

@Controller('api/v1/drivers')
@ApiTags('Drivers')
export class DriversController {
  constructor(
    private readonly driversService: DriversService,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  @Get()
  async getAllDrivers() {
    const drivers = await this.driversService.getAll();
    const resources = drivers.map((driver) =>
      this.mapper.map(driver, Driver, DriverDto),
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Drivers fetched successfully',
      drivers: resources,
    };
  }

  @Post()
  async createDriver(@Body() createDriverDto: CreateDriverDto) {
    const driver = this.mapper.map(createDriverDto, CreateDriverDto, Driver);
    console.log(driver);
    const result = await this.driversService.create(driver);
    const resource = this.mapper.map(driver, Driver, DriverDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Driver created successfully',
      driver: resource,
    };
  }

  @Get(':id')
  async getDriverById(@Param('id') id: number) {
    const driver = await this.driversService.getById(id);
    const resource = this.mapper.map(driver, Driver, DriverDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Driver fetched successfully',
      driver: resource,
    };
  }

  @Put(':id')
  async updateDriver(
    @Param('id') id: number,
    @Body() updateDriverDto: UpdateDriverDto,
  ) {
    const driver = this.mapper.map(updateDriverDto, UpdateDriverDto, Driver);
    const result = await this.driversService.update(id, driver);
    const resource = this.mapper.map(result, Driver, DriverDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Driver updated successfully',
      driver: resource,
    };
  }

  @Patch(':id')
  async partiallyUpdateDriver(
    @Param('id') id: number,
    @Body() updateDriverDto: Partial<UpdateDriverDto>,
  ) {
    const driver = this.mapper.map(updateDriverDto, UpdateDriverDto, Driver);
    const result = await this.driversService.update(id, driver);
    const resource = this.mapper.map(result, Driver, DriverDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Driver updated successfully',
      driver: resource,
    };
  }

  @Delete(':id')
  async deleteDriver(@Param('id') id: number) {
    await this.driversService.delete(id);
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message: 'Driver deleted successfully',
    };
  }
}
