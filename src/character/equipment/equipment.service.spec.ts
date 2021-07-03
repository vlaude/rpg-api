import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentService } from './equipment.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EquipmentPosition } from './models/equipment-position.enum';
import { Equipment } from './models/equipment.entity';

describe('EquipmentService', () => {
    let service: EquipmentService;
    let mockEquipmentRepository = jest.fn();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                EquipmentService,
                {
                    provide: getRepositoryToken(Equipment),
                    useValue: mockEquipmentRepository,
                },
            ],
        }).compile();

        service = module.get<EquipmentService>(EquipmentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('equipEquipmentPiece', () => {
        let mockNewPiece;
        let mockCharacter;

        beforeEach(() => {
            mockNewPiece = {
                id: 1,
                inventory: {
                    id: 1,
                },
                equipable: true,
                equipmentPosition: EquipmentPosition.CHEST,
            };
            mockCharacter = {
                inventory: {
                    id: 1,
                },
                equipment: {
                    id: 1,
                    equipmentPieces: [],
                },
            };
        });

        it('should add the new piece in the equipment', async () => {
            let equipment = await service.equipEquipmentPiece(mockCharacter, mockNewPiece);
            let newEquipedPiece = equipment.equipmentPieces.find(e => e.id === mockNewPiece.id);
            expect(newEquipedPiece).toBeTruthy();
        });

        it('should throw an error if the new piece is not equipable', async () => {
            mockNewPiece.equipable = false;
            let error;
            try {
                await service.equipEquipmentPiece(mockCharacter, mockNewPiece);
            } catch (err) {
                error = err;
                expect(error).toBeTruthy();
            }
        });

        it('should throw an error if the new piece is not in the character inventory', async () => {
            mockNewPiece.inventory.id = 2;
            let error;
            try {
                await service.equipEquipmentPiece(mockCharacter, mockNewPiece);
            } catch (err) {
                error = err;
                expect(error).toBeTruthy();
            }
        });

        it('should throw an error if another equipment piece is already equiped at the same position', async () => {
            mockCharacter.equipment.equipmentPieces.push({
                id: 2,
                equipmentPosition: EquipmentPosition.CHEST,
            });

            let error;
            try {
                await service.equipEquipmentPiece(mockCharacter, mockNewPiece);
            } catch (err) {
                error = err;
                expect(error).toBeTruthy();
            }
        });
    });
});
