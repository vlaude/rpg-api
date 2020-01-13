import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentService } from './equipment.service';
import { Item } from 'src/item/item/models/item.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotImplementedException, Logger } from '@nestjs/common';
import { EquipmentPosition } from './models/equipment-position.enum';

describe('EquipmentService', () => {
    let service: EquipmentService;
    let mockItemRepository = jest.fn();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                EquipmentService,
                {
                    provide: getRepositoryToken(Item),
                    useValue: mockItemRepository,
                },
            ],
        }).compile();

        service = module.get<EquipmentService>(EquipmentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('equipEquipmentPiece', () => {
        let mockOldPiece;
        let mockNewPiece;
        let mockCharacter;

        beforeEach(() => {
            mockOldPiece = {
                equipment: {
                    id: 1,
                },
                equipmentPosition: EquipmentPosition.CHEST,
            };
            mockNewPiece = {
                inventory: {
                    id: 1,
                },
                equipmentPosition: EquipmentPosition.CHEST,
            };
            mockCharacter = {
                inventory: {
                    id: 1,
                },
                equipment: {
                    id: 1,
                    equipmentPieces: [mockOldPiece],
                },
            };
        });

        it('should equip the new piece properly', async () => {
            service.equipEquipmentPiece(mockCharacter, mockNewPiece);

            expect(mockNewPiece.inventory).toBeNull();
            expect(mockNewPiece.equipment.id).toBe(1);
            expect(mockOldPiece.inventory.id).toBe(1);
            expect(mockOldPiece.equipment).toBeNull();
        });

        it('should not unequip the pieces on other positions', () => {
            mockNewPiece.equipmentPosition = EquipmentPosition.HEAD;
            service.equipEquipmentPiece(mockCharacter, mockNewPiece);
            expect(mockNewPiece.equipment.id).toBe(1);
            expect(mockOldPiece.equipment.id).toBe(1);
        });
    });
});
