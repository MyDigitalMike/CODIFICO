using Api.Data.Context;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Repositories
{
    public class ShipperRepository: IShipperRepository
    {
        private readonly ApplicationDbContext _context;
        public ShipperRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Shipper>> GetAllShippersAsync()
        {
            return await _context.Shippers.ToListAsync();
        }

    }
}
