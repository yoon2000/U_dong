import { Controller, Delete, HttpException, Param, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'common/auth/guard';
import { Response } from 'express';
import { ImageService } from './service/image.service';
import { S3Service } from './service/s3.service';

@Controller('image')
export class ImageController {
	constructor(
		private readonly imageService: ImageService,
		private readonly s3Service: S3Service,
	) {}

	@Post('/presigned')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get presigned url for upload image' })
	@ApiResponse({ status: 200, description: 'Get presigned url for upload image' })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async getPresignedUrl(@Res({ passthrough: true }) response: Response) {
		try {
			const image = await this.imageService.createImage();
			console.log(image);
			const presignedUrl = await this.s3Service.getPresignedUrl(image['_id'].toString());

			return response.status(200).json({
				message: 'Get presigned url for upload image successfully',
				presignedUrl,
			});
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Delete('/:iid')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Delete image' })
	@ApiResponse({ status: 200, description: 'Delete image' })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async deleteImage(@Param('iid') imageId: string, @Res({ passthrough: true }) response: Response) {
		try {
			this.imageService.deleteImage(imageId);
			this.s3Service.deleteImage(imageId);

			return response.status(200).json({
				message: 'Delete image successfully',
			});
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}
}