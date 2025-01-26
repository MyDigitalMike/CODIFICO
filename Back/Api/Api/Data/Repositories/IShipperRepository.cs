using Api.Models;

namespace Api.Data.Repositories
{
    public interface IShipperRepository
    {
        Task<IEnumerable<Shipper>> GetAllShippersAsync();
    }
}
