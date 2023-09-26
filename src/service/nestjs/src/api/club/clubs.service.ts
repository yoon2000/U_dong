import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Club } from 'common/database/schema/club.schema';
import { CreateClubDTO } from './dto/request/createClub.dto';

@Injectable()
export class ClubsService {
	constructor(@InjectModel(Club.name) private clubModel: Model<Club>) {}

	async create(createClubDto: CreateClubDTO): Promise<Club> {
		const createdClub = new this.clubModel(createClubDto);
		return createdClub.save();
	}

	async findAll(): Promise<Club[]> {
		return await this.clubModel.find().exec();
	}

	async findOne(id: string): Promise<Club> {
		return this.clubModel.findOne({ _id: id }).exec();
	}

	async searchByName(name: string): Promise<Club[]> {
		return this.clubModel.find({ name }).exec();
	}

	async update(clubId: string, updateData: Partial<Club>): Promise<Club | null> {
		return this.clubModel.findByIdAndUpdate(clubId, updateData, { new: true }).exec();
	}

	async delete(id: string) {
		const deletedClub = await this.clubModel.findByIdAndRemove({ _id: id }).exec();
		return deletedClub;
	}

	async addSchedule(cludId: string | Types.ObjectId, scheduleId: Types.ObjectId) {
		const club = await this.clubModel.findById(cludId).exec();
		club.schedules.push(scheduleId);
		return club.save();
	}
}
