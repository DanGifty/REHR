<?php

namespace App\DataTables\Letters;

use App\Models\Letters\Upgradings;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class UpgradingDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->addColumn('action', 'upgrading.action')
            ->addColumn('serialNumber',function($row){
                static $counter = 0;
                $counter++;
                return request('start')+$counter;
            })
            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(Upgradings $model): QueryBuilder
    {
        return $model->with('users')->latest('id')->newQuery();
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
                    ->setTableId('upgrading-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    //->dom('Bfrtip')
                    ->orderBy(1)
                    ->selectStyleSingle()
                    ->buttons([
                        Button::make('excel'),
                        Button::make('csv'),
                        Button::make('pdf'),
                        Button::make('print'),
                        Button::make('reset'),
                        Button::make('reload')
                    ]);
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::make('serialNumber')->title('Sr. No')->searchable(false)->orderable(false),
            Column::make('name')->searchable(true),
            Column::make('staffid')->title('Staff Id')->searchable(true),
            Column::make('regdno')->title('Regd No.')->searchable(true),
            Column::make('address')->searchable(true),
            Column::make('degree')->title('Level')->searchable(true),
            Column::make('school')->searchable(true),

            Column::make('created_at')->title('Date Created'),
            Column::computed('action')
            ->exportable(false)
            ->printable(false)
            ->width(60)
            ->addClass('text-center'),
        ];
    }

    /**
     * Get the filename for export.
     */
    protected function filename(): string
    {
        return 'Upgrading_' . date('YmdHis');
    }
}
